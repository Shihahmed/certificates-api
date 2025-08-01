import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  swaggerInit(app);

  await app.listen(process.env.PORT ?? 3000);
}

function swaggerInit(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Certificates API')
    .setDescription('The Certificates API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

bootstrap();
