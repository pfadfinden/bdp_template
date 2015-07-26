# BdP TYPO3 Template

BdP Webseiten Layout als Extension für das Content Management System TYPO3

## Voraussetzungen

Vorausgesetzt wird eine funktionsfähige TYPO3 Installation.

Folgende Anwendungsversionen werden von der Extension unterstützt:

| Anwendung        | Version        |
| ---------------- | -------------- |
| TYPO3 CMS        | 6.2.0 - 6.2.99 |
| EXT extbase      | 1.3 - 6.2.99   |
| EXT fluid        | 1.3 - 6.2.99   |
| EXT news         | 3.2.0 - 3.9.99 |
| EXT gridelements | 3.2.0 - 3.2.99 |

## Installation
### Installationsvariante 1: Dateidownload aus GitHub Repository
1. Lade die aktuellste Version des TYPO3 BdP Template unter https://github.com/pfadfinden/bdp_template/archive/master.zip herunter.
2. Entzippe das heruntergeladene Archiv und lösche "-master" aus dem Ordnername. Das Verzeichnis sollte nun den Namen "bdp_template" haben.
3. Lade das Verzeichnis "bdp_template" per FTP/SSH nun auf deinen Webserver in den Ordner /typo3conf/ext/. Wenn du alles richtig gemacht hast, solltest du nun diese Installationsanleitung auch unter typo3conf/ext/bdp_template/README.md auf deinem Webserver wiederfinden.
4. Öffne das TYPO3 Backend unter /typo3 und melde dich mit einem Benutzer mit administrativen Berechtigungen an.
5. Klicke auf den Menüpunkt "Erweiterungsmanager". Das DropDown Menü im oberen Bildschirmbereich sollte den Modus "Erweiterungen verwalten" angewählt haben.
6. In der Erweiterungsliste findest du nun auch "BdP Template". Aktiviere diese Erweiterung per Klick auf den Baustein vor dem Namen.


## Fragen & Antworten

#### Hat diese Extension Einfluss auf alle Seiten meiner TYPO3 Installation?
Nein, diese Extension wirkt sich nur auf Seiten aus, die das statische Template "BdP Template" einschließen.

#### Tauscht diese Extension Informationen mit anderen Systemen (z.B. Bund) aus?
Nein, die Extension tauscht keinerlei Informationen aus. Durch Einsatz eines CDN (Content Delivery Network) werden möglicherweise jedoch statische Dateien (Bilder, Webfonts oder JavaScript) von einem zentralen Webserver des BdP nachgeladen.

#### Kann ich in der selben TYPO3 Installation auch Webseiten komplett selbst gestalten?
Ja, dies ist möglich und z.B. bei Microsites zu Veranstaltungen oder Lagern sinnvoll. Nur Seiten die das statische Template "BdP Template" einschließen, werden angepasst.
