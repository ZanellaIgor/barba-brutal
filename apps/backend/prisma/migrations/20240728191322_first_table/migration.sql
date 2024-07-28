/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `profissional` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "profissional_nome_key" ON "profissional"("nome");
