import { Controller, Get, Put, Body } from '@nestjs/common';

@Controller('api/config')
export class ConfigController {
  @Get()
  getYdauConfig(): any {
    return {
      api_url: 'https://central-cems.example.com/api/readings',
      api_key: '***hidden***',
      folder_path: 'C:\\YDAU\\Data\\Excel',
      retry_interval: 300,
      batch_size: 50,
      auto_start: true
    };
  }

  @Put()
  updateYdauConfig(@Body() config: any): any {
    return {
      success: true,
      message: 'YDAU configuration updated successfully',
      updated_keys: Object.keys(config)
    };
  }
}