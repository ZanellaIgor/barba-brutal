import { profissionais, servicos } from '@barba/core';
import { PrismaClient } from '@prisma/client';
import {
  Profissional as PrismaProfissional,
  Servico as PrismaServico,
} from 'prisma/prisma-client';

const prisma = new PrismaClient();

async function seed() {
  console.log(profissionais);
  await prisma.profissional.createMany({
    data: profissionais as PrismaProfissional[],
  });
  await prisma.servico.createMany({ data: servicos as PrismaServico[] });
}

seed();
