import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  app.enableCors();
  await app.listen(process.env.PORT || 3000);
  logger.log(`Application is running on: ${ await app.getUrl() }`);
}
bootstrap();
