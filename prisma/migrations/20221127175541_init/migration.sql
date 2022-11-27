-- CreateTable
CREATE TABLE "Pokemons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Pokemons_pkey" PRIMARY KEY ("id")
);
