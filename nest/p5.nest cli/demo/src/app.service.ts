import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getXiaoLong(): string {
    return '我是小龙';
  }
}
