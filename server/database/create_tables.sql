BEGIN;

DROP TABLE IF EXISTS "verses";

CREATE TABLE "verses" (
    "verse" TEXT NOT NULL,
    "from" TEXT NOT NULL
);

COMMIT;