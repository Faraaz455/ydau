import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('api/readings')
export class ReadingsController {
  @Get('pending')
  getPendingReadings(): any {
    return {
      data: [
        { id: 1, timestamp: new Date(), unit_id: 'UNIT-001', stack_id: 'STACK-A', so2: 45.2, nox: 23.1, co2: 387.5, status: 'PENDING', retry_count: 0 },
        { id: 2, timestamp: new Date(), unit_id: 'UNIT-002', stack_id: 'STACK-B', so2: 52.8, nox: 28.4, co2: 401.2, status: 'PENDING', retry_count: 1 }
      ],
      count: 2
    };
  }

  @Get('stats')
  getYdauStats(): any {
    return {
      pending_count: 15,
      sent_count: 1245,
      failed_count: 3,
      last_sync: new Date('2025-08-11T10:30:00Z'),
      api_status: 'CONNECTED'
    };
  }

  @Post('upload')
  uploadReading(@Body() reading: any): any {
    return {
      success: true,
      message: 'Reading queued for transmission to Central CEMS',
      reading_id: 123
    };
  }
}