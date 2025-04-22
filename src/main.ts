import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(' MONGO_URI:', process.env.MONGO_URI); // will show what Mongo URI is being used inside Render logs
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
