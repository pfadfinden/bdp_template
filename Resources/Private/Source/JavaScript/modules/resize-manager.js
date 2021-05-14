class ResizeManger {
    constructor() {
        if (!ResizeManger.instance) {
            this.callbacks = new Map()
            this.resizeObserver = new ResizeObserver(entries => {
                for (const entry of entries) {
                    if (this.callbacks.has(entry.target)) {
                        this.callbacks.get(entry.target)(entry)
                    }
                }
            })
            ResizeManger.instance = this;
        }

        return ResizeManger.instance;
    }

    registerElement(element, callback) {
        if (!this.resizeObserver || !element || typeof callback !== 'function') return
        this.callbacks.set(element, callback);
        this.resizeObserver.observe(element)
    }

    destroyListener(element) {
        if (!this.resizeObserver || !element) return
        this.callbacks.delete(element);
        this.resizeObserver.unobserve(element);
    }
}

const instance = new ResizeManger();
Object.freeze(instance);

export default instance;

