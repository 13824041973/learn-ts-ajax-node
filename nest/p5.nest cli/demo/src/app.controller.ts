import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('get')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('xiaoLong')
  getXiaoLong(): string {
    return this.appService.getXiaoLong();
  }
}