/*
  Warnings:

  - You are about to drop the column `note_1` on the `rating` table. All the data in the column will be lost.
  - You are about to drop the column `note_2` on the `rating` table. All the data in the column will be lost.
  - You are about to drop the column `note_3` on the `rating` table. All the data in the column will be lost.
  - You are about to drop the column `note_4` on the `rating` table. All the data in the column will be lost.
  - You are about to drop the column `note_5` on the `rating` table. All the data in the column will be lost.
  - You are about to drop the column `note_6` on the `rating` table. All the data in the column will be lost.
  - You are about to drop the column `note_7` on the `rating` table. All the data in the column will be lost.
  - You are about to drop the column `note_8` on the `rating` table. All the data in the column will be lost.
  - You are about to drop the column `note_9` on the `rating` table. All the data in the column will be lost.
  - Added the required column `note1` to the `rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note2` to the `rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note3` to the `rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note4` to the `rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note5` to the `rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note6` to the `rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note7` to the `rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note8` to the `rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note9` to the `rating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rating" DROP COLUMN "note_1",
DROP COLUMN "note_2",
DROP COLUMN "note_3",
DROP COLUMN "note_4",
DROP COLUMN "note_5",
DROP COLUMN "note_6",
DROP COLUMN "note_7",
DROP COLUMN "note_8",
DROP COLUMN "note_9",
ADD COLUMN     "note1" INTEGER NOT NULL,
ADD COLUMN     "note2" INTEGER NOT NULL,
ADD COLUMN     "note3" INTEGER NOT NULL,
ADD COLUMN     "note4" INTEGER NOT NULL,
ADD COLUMN     "note5" INTEGER NOT NULL,
ADD COLUMN     "note6" INTEGER NOT NULL,
ADD COLUMN     "note7" INTEGER NOT NULL,
ADD COLUMN     "note8" INTEGER NOT NULL,
ADD COLUMN     "note9" INTEGER NOT NULL;
