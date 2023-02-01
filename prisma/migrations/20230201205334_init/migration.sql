/*
  Warnings:

  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photoURL` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "photoURL" TEXT NOT NULL,
ADD COLUMN     "providerId" TEXT NOT NULL;
