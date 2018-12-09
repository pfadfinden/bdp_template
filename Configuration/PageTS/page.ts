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