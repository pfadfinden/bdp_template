TCEFORM.tt_content {
    section_frame {
        # remove all frames
        removeItems = 1,5,6,10,11,12

        # Umbenennen
        altLabels {
            20 = Gelbe Box
            21 = Blaue Box
        }

        # add new frame
        addItems.25 = Rote Box
        addItems.100 = Weisse Box
        addItems.101 = Weisse Box 2
        addItems.105 = Weise Box 3
    }
    header_layout {
        addItems.80 = Blau/Gelb
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
                                allowed = header,text,textpic,image,table,list,html
                            }
                            2 {
                                name = Spalte 2
                                colPos = 20
                                allowed = header,text,textpic,image,table,list,html
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
                                allowed = header,text,image,table,list,html
                            }
                            2 {
                                name = Spalte 2
                                colPos = 20
                                allowed = header,text,image,table,list,html
                            }
                            3 {
                                name = Spalte 3
                                colPos = 30
                                allowed = header,text,image,table,list,html
                            }
                        }
                    }
                }
            }
        }


    }
}