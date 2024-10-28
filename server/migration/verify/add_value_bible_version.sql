-- Verify sap:add_table_bible_version on pg

BEGIN;

SELECT * FROM "verses" WHERE version = 'KJV';

ROLLBACK;
