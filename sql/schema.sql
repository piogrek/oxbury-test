-- CreateTable
CREATE TABLE "Farm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "num_cows" INTEGER NOT NULL,
    "num_chickens" INTEGER NOT NULL,
    "num_pigs" INTEGER NOT NULL,
    "acres_farmed" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Farmer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "phone_number" TEXT,
    "farm_id" INTEGER,
    CONSTRAINT "Farmer_farm_id_fkey" FOREIGN KEY ("farm_id") REFERENCES "Farm" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "amount_requested" REAL,
    "status" TEXT NOT NULL,
    "product_id" INTEGER,
    "farmer_id" INTEGER,
    CONSTRAINT "Application_farmer_id_fkey" FOREIGN KEY ("farmer_id") REFERENCES "Farmer" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Application_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
