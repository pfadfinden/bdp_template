#  Bund der Pfadfinderinnen und Pfadfinder - TYPO3 Template

BdP Webseiten Layout als Extension für das Content Management System TYPO3

## Voraussetzungen

Vorausgesetzt wird eine funktionsfähige TYPO3 Installation und Erweiterungen ab einer gewissen Versionsnummer.
Optionale Anwendungen sind nicht zwingend für den Betrieb einer Webseite mit BdP Template notwendig, bieten aber praktische Zusatzfunktionen und Vereinfachungen.

| Anwendung        | Version        | Optional |
| ---------------- | -------------- | -------- |
| TYPO3 CMS        | 6.2.0 - 6.2.99 | nein     |
| EXT extbase      | 1.3 - 6.2.99   | nein     |
| EXT fluid        | 1.3 - 6.2.99   | nein     |
| EXT news         | 3.2.0 - 3.9.99 | nein       |
| EXT gridelements | 3.2.0 - 3.2.99 | nein       |
| EXT realurl      | 1.13.0 - 1.99.99 | ja     |
| EXT filemetadata | 6.2.0 - 6.2.99 | nein     |

## Installation
1. Lade die aktuelle Version des Templates unter [Github Releases](https://github.com/pfadfinden/bdp_template/releases) als `.zip` Datei herunter.
2. Logge dich als Administrator im Backend deiner TYPO3 Installation an und wähle den Menüpunkt *Adminwerkzeuge/Erweiterungen*.
3. Am oberen Bildschirmrand findest du das kleine Upload Icon "Erweiterung hochladen", klicke dies an. Es erscheint ein Formular in dem du die zuvor heruntergeladenen zip-Datei des Templates angibst und auf *Hochladen* klickst.
4. In der Liste "Erweiterungen verwalten" findest du nun die Erweiterung `BdP Template`. Aktiviere diese Klick auf das Bausteinsymbol vor dem Dateinamen.

## Update
Beachte bei neuen Versionen des Templates besonders Hinweise zu geänderten Abhängigkeiten in den Releasenotes. Der Update des Extension erfolgt wie die Installation. Es ist in Schritt 3 lediglich zu beachten, dass die Checkbox *Überschreiben* gewählt ist, damit die alten Dateien ersetzt werden.

Danach sollte gegebenenfalls die Konfiguration des Templates und der PageTS angepasst werden.

## Konfiguration
* Wähle im Menü *Web/Liste* aus und bearbeite den Template Datensatz der Anfangsseite der Webseite (root-Template). Solltest du noch kein Template angelegt haben, erstelle einen neuen Template Datensatz.
* Im Reiter *Enthält* solltest du im Abschnitt *Statische Templates einschließen* die Objekte `css_styled_content`, `news`, `gridelements` und `BdP Template` in dieser Reihenfolge aktivieren. Speichere anschließend die Änderung am Template Datensatz.
* Wechsel nun in das Menü *Web/Template*. Wähle in der Ansicht *Template-Werkzeug* die Kategorie `BdP Template` aus. Es werden dir alle Konfigurationen angezeigt, die du am Template vornehmen kannst. Nach Änderungen klicke auf das Speicher-Symbol (Diskette) am oberen Bildschirmrand. Bei  der ersten Installation ist es sinnvoll den kompletten Inhalt von  `bdp_template/Configuration/TypoScript/Constants/base.ts` in die Konstanten zu kopieren und anzupassen.
* Wechsele noch in das Menü *Web/Seite* und editiere die Anfangsseite(Weltkugel). Im Reiter Ressourcen findest du das Feld *Seiten-TSconfig* (PageTS). Kopiere dort den Inhalt von  `bdp_template/Configuration/PageTS/page.ts` herein und speichere die Seite.
* Nach Änderungen am Template ist es sinnvoll, zwischengespeicherte Versionen der Webseite zu löschen. Klicke hierfür auf das Blitz-Symbol rechts oben und wähle *Frontend-Caches leeren* und *Allgemeinen Case leeren*.

## Hinweise

### Titel Bilder

### Bilder

## Fragen & Antworten

#### Hat diese Extension Einfluss auf alle Seiten meiner TYPO3 Installation?
Nein, diese Extension wirkt sich nur auf Seiten aus, die das statische Template `BdP Template` einschließen.

#### Tauscht diese Extension Informationen mit anderen Systemen aus?
Nein, die Extension tauscht keinerlei Informationen aus. Durch Einsatz von CDN-Links werden möglicherweise jedoch statische Dateien von einem externen Webserver nachgeladen.

#### Kann ich in der selben TYPO3 Installation auch Webseiten komplett selbst gestalten?
Ja, dies ist möglich und z.B. bei Microsites zu Veranstaltungen oder Lagern sinnvoll. Nur Seiten die das statische Template `BdP Template` einschließen, werden angepasst.

#### Warum werden einige Dateien über CDN Links geladen?
CDN steht für Content Delivery Network. Es handelt sich hierbei um einen Verbund von Servern, die speziell für die Auslieferung von statischen Dateien optimiert sind. Durch Einsatz des CDN und die Wiederverwendung der selben Resourcen durch Bund und Länder wird die Darstellung der Webseite beschleunigt. Als Standard CDN wird cdn.pfadfinden.de verwendet.

#### Wo kann ich individuelle Änderungen am Template vornehmen?
Alle Konfigurationen des Templates können ergänzt oder überschrieben werden. Diese Änderungen solltest du in dem root-Template Datensatz deines TYPO3 Systems vornehmen. **Bitte beachte**: Es ist keine gute Idee, Änderungen direkt im Extensionverzeichnis `typo3conf/ext/bdp_template` vorzunehmen. Änderungen in diesem Verzeichnis werden bei Updates der Erweiterung automatisch gelöscht.
