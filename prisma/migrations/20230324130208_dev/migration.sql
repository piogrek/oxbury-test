-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "amount_requested" REAL,
    "status" TEXT NOT NULL,
    "product_id" INTEGER,
    "farmer_id" INTEGER,
    CONSTRAINT "Application_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Application_farmer_id_fkey" FOREIGN KEY ("farmer_id") REFERENCES "Farmer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Application" ("amount_requested", "farmer_id", "id", "product_id", "status", "type") SELECT "amount_requested", "farmer_id", "id", "product_id", "status", "type" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
