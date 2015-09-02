DELETE FROM `backend_layout` WHERE uid = 9570 OR 9580;

INSERT INTO `backend_layout` (`uid`, `pid`, `title`, `config`) VALUES
(9570, 0, 'BdP Layout 2-spaltig', 'backend_layout {\r\n	colCount = 4\r\n	rowCount = 1\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Inhalt\r\n					colPos = 0\r\n					colspan = 3\r\n				}\r\n				2 {\r\n					name = Zusatzmenü\r\n					colPos = 3\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', ''),
(9580, 0, 'BdP Layout 1-spaltig', 'backend_layout {\r\n	colCount = 1\r\n	rowCount = 1\r\n	rows {\r\n		1 {\r\n			columns {\r\n				1 {\r\n					name = Inhalt\r\n					colPos = 0\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n', '');
