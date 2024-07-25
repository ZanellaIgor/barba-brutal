import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  console.log(`Listening on port ${env.PORT}`);
  await app.listen(env.PORT || 3001);
}
bootstrap();
