/*
  Warnings:

  - You are about to drop the column `image` on the `Pokemons` table. All the data in the column will be lost.
  - You are about to drop the column `pass` on the `Pokemons` table. All the data in the column will be lost.
  - You are about to drop the column `smash` on the `Pokemons` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pokemons" DROP COLUMN "image",
DROP COLUMN "pass",
DROP COLUMN "smash";
