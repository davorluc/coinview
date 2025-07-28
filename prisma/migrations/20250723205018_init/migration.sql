/*
  Warnings:

  - You are about to drop the column `name` on the `Coin` table. All the data in the column will be lost.
  - Added the required column `avers` to the `Coin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `continent` to the `Coin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `general` to the `Coin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nominal` to the `Coin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `revers` to the `Coin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shorthand` to the `Coin` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Coin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nominal" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "continent" TEXT NOT NULL,
    "shorthand" TEXT NOT NULL,
    "avers" TEXT NOT NULL,
    "revers" TEXT NOT NULL,
    "general" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "value" INTEGER NOT NULL
);
INSERT INTO "new_Coin" ("id", "origin", "value", "year") SELECT "id", "origin", "value", "year" FROM "Coin";
DROP TABLE "Coin";
ALTER TABLE "new_Coin" RENAME TO "Coin";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
