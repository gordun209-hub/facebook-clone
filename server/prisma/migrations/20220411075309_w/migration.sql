/*
  Warnings:

  - Made the column `postedById` on table `Link` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "postedById" INTEGER NOT NULL,
    CONSTRAINT "Link_postedById_fkey" FOREIGN KEY ("postedById") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Link" ("country", "createdAt", "description", "id", "postedById", "title", "url") SELECT "country", "createdAt", "description", "id", "postedById", "title", "url" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
