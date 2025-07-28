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
    "value" INTEGER NOT NULL,
    "trayId" INTEGER,
    CONSTRAINT "Coin_trayId_fkey" FOREIGN KEY ("trayId") REFERENCES "Tray" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Coin" ("avers", "continent", "general", "id", "nominal", "origin", "revers", "shorthand", "trayId", "value", "year") SELECT "avers", "continent", "general", "id", "nominal", "origin", "revers", "shorthand", "trayId", "value", "year" FROM "Coin";
DROP TABLE "Coin";
ALTER TABLE "new_Coin" RENAME TO "Coin";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
