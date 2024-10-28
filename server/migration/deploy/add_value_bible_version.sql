-- Deploy sap:add_table_bible_version to pg

BEGIN;

ALTER TABLE verses ADD COLUMN version TEXT NOT NULL DEFAULT 'KJV';

UPDATE verses SET version = 'KJV';

COMMIT;
