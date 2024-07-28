# Barba Brutal Monorepo

Este é o monorepo do projeto **Barba Brutal**, que inclui três aplicativos: um aplicativo móvel usando React Native e Expo, um aplicativo web usando NextJs, e um backend usando NestJS e Prisma e Docker. Este monorepo é gerenciado com Turborepo.

O aplicativo realiza agendametos de serviços de uma barbearia, calculando horarios com base nos serviços selecionados.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente de desenvolvimento:

- Node.js (versão 18.x ou superior)
- Yarn
- Docker e Docker Compose
- Expo CLI (para o aplicativo mobile)

## Instalar Dependência

Siga os passos abaixo para instalar todas as dependências necessárias:

_Na pasta raiz:_
yarn install
docker compose up

_backend:_
yarn install
yarn prisma migrate dev
yarn prisma db seed

_frontend_
cd apps/frontend
yarn install

_mobile_
cd apps/mobile
yarn install

_package_
cd packages
yarn install

## Rodar Projeto

Na pasta raiz:
yarn dev
