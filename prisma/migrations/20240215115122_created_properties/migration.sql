-- CreateTable
CREATE TABLE "properties" (
    "id" TEXT NOT NULL,
    "coveredArea" DOUBLE PRECISION NOT NULL,
    "totalLandArea" DOUBLE PRECISION NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "amenities" TEXT[],
    "services" TEXT[],
    "nearbyPlaces" TEXT[],
    "nearbyBusStops" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "properties_pkey" PRIMARY KEY ("id")
);
