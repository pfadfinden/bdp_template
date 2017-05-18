TCEFORM.tt_content {
    layout {
        # Umbenennen
        altLabels {
            0 = Weißer Hintergund
            1 = Gelber Hintergrund
            2 = Blauer Hintergrund
            3 = Roter Hintergrund
        }

        # add new frame
        addItems.4 = Transparent mit Innenabst.
        addItems.5 = Weiß ohne Innenabst.
        addItems.6 = Weiß 50% Float
        addItems.7 = Ohne Hintergrund

    }

    header_layout {
        addItems.80 = Blau/Gelb
        addItems.81 = Weiß/Rot
        addItems.82 = Weiß/Blau
    }
    header_position.disabled = 1
}
tx_gridelements {
    # TS Elemente haben Vorrang vor Datensätzen mit gleichen IDs
    overruleRecords = 1
    setup {
        twocolums {
            title = Zweispalter
            description = Ein zweispaltiges Inhaltselement
            topLevelLayout = 1
            frame = 2
            config {
                colCount = 2
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = Spalte 1
                                colPos = 10
                                allowed = header,textmedia,table,list,html,menu,uploads
                            }
                            2 {
                                name = Spalte 2
                                colPos = 20
                                allowed = header,textmedia,table,list,html,menu,uploads
                            }
                        }
                    }
                }
            }
        }

        threecolums {
            title = Dreispalter
            description = Ein dreispaltiges Inhaltselement
            topLevelLayout = 1
            frame = 3
            config {
                colCount = 3
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = Spalte 1
                                colPos = 10
                                allowed = header,textmedia,table,list,html,menu
                            }
                            2 {
                                name = Spalte 2
                                colPos = 20
                                allowed = header,textmedia,table,list,html,menu
                            }
                            3 {
                                name = Spalte 3
                                colPos = 30
                                allowed = header,textmedia,table,list,html,menu
                            }
                        }
                    }
                }
            }
        }


    }
}

//news Templates
tx_news.templateLayouts {
    20 = Mit Archiv Link
}