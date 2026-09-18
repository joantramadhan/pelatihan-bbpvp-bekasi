/*
  Warnings:

  - You are about to drop the column `categoryId` on the `movie` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `movie` DROP FOREIGN KEY `movie_categoryId_fkey`;

-- DropIndex
DROP INDEX `movie_categoryId_fkey` ON `movie`;

-- AlterTable
ALTER TABLE `movie` DROP COLUMN `categoryId`,
    ADD COLUMN `categoryid` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `movie` ADD CONSTRAINT `movie_categoryid_fkey` FOREIGN KEY (`categoryid`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
