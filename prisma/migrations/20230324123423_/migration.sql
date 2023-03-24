-- CreateTable
CREATE TABLE "Farm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "numCows" INTEGER NOT NULL,
    "numChickens" INTEGER NOT NULL,
    "numPigs" INTEGER NOT NULL,
    "acresFarmed" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Farmer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "phone_number" TEXT,
    "farmId" INTEGER,
    CONSTRAINT "Farmer_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm" ("id") ON DELETE SET NULL ON UPDATE CASCADE
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
    "amount_requested" REAL NOT NULL,
    "status" TEXT NOT NULL,
    "productId" INTEGER,
    "farmerId" INTEGER,
    CONSTRAINT "Application_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Application_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
