/*
  Warnings:

  - You are about to drop the column `synopsis` on the `Animes` table. All the data in the column will be lost.
  - Added the required column `Synopsis` to the `Animes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Animes" DROP COLUMN "synopsis",
ADD COLUMN     "Synopsis" TEXT NOT NULL;
