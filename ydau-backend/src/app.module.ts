import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReadingsModule } from './readings/readings.module';
import { ConfigModule } from './config/config.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [ReadingsModule, ConfigModule, LogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
