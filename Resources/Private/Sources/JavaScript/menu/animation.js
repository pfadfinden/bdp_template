const vtcKey = Symbol('_vtc')

// synchronously force layout to put elements into a certain state
function forceReflow(el) {
    const targetDocument = el ? el.ownerDocument : document
    return targetDocument.body.offsetHeight
}

function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.add(c));
    (
        (el)[vtcKey] ||
        ((el)[vtcKey] = new Set())
    ).add(cls)
}

function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.remove(c))
    const _vtc = (el)[vtcKey]
    if (_vtc) {
        _vtc.delete(cls)
        if (_vtc.size === 0) {
            (el)[vtcKey] = undefined
        }
    }
}

function nextFrame(cb) {
    requestAnimationFrame(() => {
        requestAnimationFrame(cb)
    })
}

const getTransitionDuration = (el) => {
    const style = getComputedStyle(el)
    const durations = style.transitionDuration.split(',').map(s => parseFloat(s) * 1000)
    const delays = style.transitionDelay.split(',').map(s => parseFloat(s) * 1000)
    const totalDurations = durations.map((d, i) => d + (delays[i] || 0))
    return Math.max(...totalDurations, 0)
}

const removeAllTransitionClasses = (el, ...classes) => {
    classes.forEach(cls => removeTransitionClass(el, cls))
}

export class Transition {
    constructor(el,
                name = 'slide',
                enterFromClass = undefined,
                enterActiveClass = undefined,
                enterToClass = undefined,
                leaveFromClass = undefined,
                leaveActiveClass = undefined,
                leaveToClass = undefined,
    ) {
        this.el = el;
        this.name = name;
        this.isEnter = false;
        this.isLeave = false;
        this._cancelEnter = null;
        this._cancelLeave = null;
        this.enterFromClass = enterFromClass ?? `${name}-enter-from`
        this.enterActiveClass = enterActiveClass ?? `${name}-enter-active`
        this.enterToClass = enterToClass ?? `${name}-enter-to`
        this.leaveFromClass = leaveFromClass ?? `${name}-leave-from`
        this.leaveActiveClass = leaveActiveClass ?? `${name}-leave-active`
        this.leaveToClass = leaveToClass ?? `${name}-leave-to`;
    }

    _cleanupEnter() {
        const el = this.el;
        removeAllTransitionClasses(el,
            this.enterFromClass,
            this.enterActiveClass,
            this.enterToClass
        )
        this.isEnter = false;
        this._cancelEnter = null;
    }

    _cleanupLeave() {
        const el = this.el;
        removeAllTransitionClasses(el,
            this.leaveFromClass,
            this.leaveActiveClass,
            this.leaveToClass
        )
        this.isLeave = false;
        this._cancelLeave = null;
    }

    cancelEnter() {
        if (this._cancelEnter) {
            this._cancelEnter();
            this._cancelEnter = null;
        }
    }

    cancelLeave() {
        if (this._cancelLeave) {
            this._cancelLeave();
            this._cancelLeave = null;
        }
    }

    enter() {
        // Cancel any ongoing leave transition
        this.cancelLeave();

        if (this.isEnter) return Promise.resolve();
        this.isEnter = true;

        return new Promise((resolve) => {
            const el = this.el;

            // Make element visible and force reflow so browser registers the state
            el.style.display = '';
            forceReflow(el);

            // Frame 1: enter-from + enter-active
            addTransitionClass(el, this.enterFromClass)
            addTransitionClass(el, this.enterActiveClass)

            nextFrame(() => {
                // Frame 2: remove enter-from, add enter-to
                removeTransitionClass(el, this.enterFromClass)
                addTransitionClass(el, this.enterToClass)

                const done = (cancelled = false) => {
                    clearTimeout(fallback);
                    el.removeEventListener('transitionend', onEnd);
                    this._cleanupEnter();
                    if (!cancelled) {
                        resolve();
                    }
                };

                const onEnd = (e) => {
                    // Ignore bubbled events from children
                    if (e && e.target !== el) return;
                    done();
                };

                // Fallback timeout if no transition is defined
                const duration = getTransitionDuration(el);
                const fallback = setTimeout(() => done(), duration + 50);

                el.addEventListener('transitionend', onEnd);

                // Store cancel function for rapid toggling
                this._cancelEnter = () => done(true);
            });
        });
    }

    leave() {
        // Cancel any ongoing enter transition
        this.cancelEnter();

        if (this.isLeave) return Promise.resolve();
        this.isLeave = true;

        return new Promise((resolve) => {
            const el = this.el;

            // Frame 1: leave-from + leave-active
            addTransitionClass(el, this.leaveFromClass)
            addTransitionClass(el, this.leaveActiveClass)

            // Force reflow to register leave-from state
            forceReflow(el);

            nextFrame(() => {
                // Frame 2: remove leave-from, add leave-to
                removeTransitionClass(el, this.leaveFromClass)
                addTransitionClass(el, this.leaveToClass)

                const done = (cancelled = false) => {
                    clearTimeout(fallback);
                    el.removeEventListener('transitionend', onEnd);
                    this._cleanupLeave();
                    if (!cancelled) {
                        el.style.display = 'none';
                        resolve();
                    }
                };

                const onEnd = (e) => {
                    // Ignore bubbled events from children
                    if (e && e.target !== el) return;
                    done();
                };

                // Fallback timeout if no transition is defined
                const duration = getTransitionDuration(el);
                const fallback = setTimeout(() => done(), duration + 50);

                el.addEventListener('transitionend', onEnd);

                // Store cancel function for rapid toggling
                this._cancelLeave = () => done(true);
            });
        });
    }

    toggle() {
        if (this.el.style.display === 'none' || getComputedStyle(this.el).display === 'none') {
            return this.enter();
        }
        return this.leave();
    }
}
