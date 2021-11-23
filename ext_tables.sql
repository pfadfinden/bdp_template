#
# Table structure for table 'tt_content'
#
CREATE TABLE tt_content (
    image_position smallint unsigned DEFAULT '0' NOT NULL
);

#
# Table structure for table 'pages'
#
CREATE TABLE pages (
    bdp_button_value varchar(255) DEFAULT '' NOT NULL,
    bdp_button_link varchar(1024) DEFAULT '' NOT NULL,
);
