/*
  Warnings:

  - You are about to drop the column `Synopsis` on the `Animes` table. All the data in the column will be lost.
  - Added the required column `synopsis` to the `Animes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Animes" DROP COLUMN "Synopsis",
ADD COLUMN     "synopsis" TEXT NOT NULL;
