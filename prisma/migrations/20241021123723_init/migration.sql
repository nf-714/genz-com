/*
  Warnings:

  - You are about to drop the column `avgRating` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `purchaseCount` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `totalReviews` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "avgRating",
DROP COLUMN "purchaseCount",
DROP COLUMN "totalReviews",
ADD COLUMN     "avg_rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "purchase_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "total_reviews" INTEGER NOT NULL DEFAULT 0;
