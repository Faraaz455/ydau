import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for YDAU Electron app
  app.enableCors({
    origin: ['http://localhost:4200', 'file://'],
    credentials: true,
  });
  
  await app.listen(3001); // Different port for YDAU
  console.log('YDAU Backend running on http://localhost:3001');
}
bootstrap();