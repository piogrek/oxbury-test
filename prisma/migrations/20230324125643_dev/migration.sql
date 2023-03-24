/*
  Warnings:

  - You are about to drop the column `farmerId` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `acresFarmed` on the `Farm` table. All the data in the column will be lost.
  - You are about to drop the column `numChickens` on the `Farm` table. All the data in the column will be lost.
  - You are about to drop the column `numCows` on the `Farm` table. All the data in the column will be lost.
  - You are about to drop the column `numPigs` on the `Farm` table. All the data in the column will be lost.
  - You are about to drop the column `farmId` on the `Farmer` table. All the data in the column will be lost.
  - Added the required column `acres_farmed` to the `Farm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `num_chickens` to the `Farm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `num_cows` to the `Farm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `num_pigs` to the `Farm` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "amount_requested" REAL NOT NULL,
    "status" TEXT NOT NULL,
    "product_id" INTEGER,
    "farmer_id" INTEGER,
    CONSTRAINT "Application_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Application_farmer_id_fkey" FOREIGN KEY ("farmer_id") REFERENCES "Farmer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Application" ("amount_requested", "id", "status", "type") SELECT "amount_requested", "id", "status", "type" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
CREATE TABLE "new_Farm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "num_cows" INTEGER NOT NULL,
    "num_chickens" INTEGER NOT NULL,
    "num_pigs" INTEGER NOT NULL,
    "acres_farmed" INTEGER NOT NULL
);
INSERT INTO "new_Farm" ("id", "name") SELECT "id", "name" FROM "Farm";
DROP TABLE "Farm";
ALTER TABLE "new_Farm" RENAME TO "Farm";
CREATE TABLE "new_Farmer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "phone_number" TEXT,
    "farm_id" INTEGER,
    CONSTRAINT "Farmer_farm_id_fkey" FOREIGN KEY ("farm_id") REFERENCES "Farm" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Farmer" ("age", "id", "name", "phone_number") SELECT "age", "id", "name", "phone_number" FROM "Farmer";
DROP TABLE "Farmer";
ALTER TABLE "new_Farmer" RENAME TO "Farmer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
