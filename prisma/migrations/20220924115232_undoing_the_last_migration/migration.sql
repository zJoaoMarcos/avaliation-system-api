/*
  Warnings:

  - Made the column `sensoTime` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `atitudeEmpreendedora` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `autonomiaResponsabilidade` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sensoDono` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `focoResultado` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `focoCliente` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `visaoSistemica` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `inovacao` on table `rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `liderancaInspiradora` on table `rating` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "rating" ALTER COLUMN "sensoTime" SET NOT NULL,
ALTER COLUMN "atitudeEmpreendedora" SET NOT NULL,
ALTER COLUMN "autonomiaResponsabilidade" SET NOT NULL,
ALTER COLUMN "sensoDono" SET NOT NULL,
ALTER COLUMN "focoResultado" SET NOT NULL,
ALTER COLUMN "focoCliente" SET NOT NULL,
ALTER COLUMN "visaoSistemica" SET NOT NULL,
ALTER COLUMN "inovacao" SET NOT NULL,
ALTER COLUMN "liderancaInspiradora" SET NOT NULL;
