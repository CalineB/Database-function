-- Deploy sap:add_new_verses to pg

BEGIN;

INSERT INTO 
"verses" ("verse", "from")
VALUES
('"But my God shall supply all your need according to his riches in glory by Christ Jesus."', 'Philippians 4:19'),
('"But thou shalt remember the Lord thy God: for it is he that giveth thee power to get wealth, that he may establish his covenant which he sware unto thy fathers, as it is this day."', 'Deuteronomy 8:18'),
('" For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end."', 'Jeremiah 29:11'),
('"Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth."', '3 John 1:2'),
('"And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work:"', '2 Corinthians 9:8');

COMMIT;
