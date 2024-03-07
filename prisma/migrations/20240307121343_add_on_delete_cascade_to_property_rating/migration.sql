-- DropForeignKey
ALTER TABLE "property_ratings" DROP CONSTRAINT "property_ratings_propertyId_fkey";

-- AddForeignKey
ALTER TABLE "property_ratings" ADD CONSTRAINT "property_ratings_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
