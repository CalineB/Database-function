-- Deploy sap:init to pg

BEGIN;

INSERT INTO 
"verses" ("verse", "from")
VALUES
('"The Lord shall open unto thee his good treasure, the heaven to give the rain unto thy land in his season, and to bless all the work of thine hand: and thou shalt lend unto many nations, and thou shalt not borrow."', ' Deuteronomy 28:12');


COMMIT;