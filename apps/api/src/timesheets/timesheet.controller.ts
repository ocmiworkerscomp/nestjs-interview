import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { Timesheet } from './timesheet.entity';
import { TimesheetService } from './timesheet.service';
import { Request } from 'express';

@Controller('timesheets')
export class TimesheetController {
  constructor(private readonly timesheetService: TimesheetService) {}

  @Get()
  async getTimesheetsForUser(@Req() request: Request) {
    const userId = request.user.id;
    return this.timesheetService.getTimesheetsForUser(userId);
  }

  @Post()
  async create(@Body() timesheetData: Timesheet) {
    if (!isValidTimesheet(timesheetData)) {
      throw new BadRequestException('Invalid timesheet data');
    }

    timesheetData.status = 'Pendiente';
    const createdTimesheet = await this.timesheetService.create(timesheetData);
    return createdTimesheet;
  }
}

function isValidTimesheet(timesheetData: Timesheet): boolean {
  if (timesheetData.hours <= 0 || timesheetData.hourlyRate <= 0) {
    return false;
  }
  return true;
}
