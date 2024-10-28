-- Revert sap:add_table_bible_version from pg

BEGIN;

ALTER TABLE verses DROP COLUMN version;


COMMIT;
