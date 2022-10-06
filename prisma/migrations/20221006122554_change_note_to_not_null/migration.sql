/*
  Warnings:

  - Made the column `note_1` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `note_2` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `note_3` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `note_4` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `note_5` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `note_6` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `note_7` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `note_8` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `note_9` on table `rating` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "rating" ALTER COLUMN "note_1" SET NOT NULL,
ALTER COLUMN "note_2" SET NOT NULL,
ALTER COLUMN "note_3" SET NOT NULL,
ALTER COLUMN "note_4" SET NOT NULL,
ALTER COLUMN "note_5" SET NOT NULL,
ALTER COLUMN "note_6" SET NOT NULL,
ALTER COLUMN "note_7" SET NOT NULL,
ALTER COLUMN "note_8" SET NOT NULL,
ALTER COLUMN "note_9" SET NOT NULL;
