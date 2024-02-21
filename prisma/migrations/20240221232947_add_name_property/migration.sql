/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `properties` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `properties` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "properties" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "properties_name_key" ON "properties"("name");
