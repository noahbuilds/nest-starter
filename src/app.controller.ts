import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { MorganInterceptor } from 'nest-morgan';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseInterceptors(MorganInterceptor('combined'))
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
