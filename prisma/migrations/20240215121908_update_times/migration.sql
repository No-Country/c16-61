/*
  Warnings:

  - You are about to drop the column `created_at` on the `properties` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `properties` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `property_ratings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "properties" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "property_ratings" DROP COLUMN "updated_at",
ADD COLUMN     "updatedAt" TIMESTAMP(3);
