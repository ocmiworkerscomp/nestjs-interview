import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Req, 
  BadRequestException, 
  Param, 
  Put, 
  UseGuards 
} from '@nestjs/common';
import { Timesheet } from './timesheet.entity';
import { TimesheetService } from './timesheet.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from './roles.decorator';
import { UserRole } from './user-role.enum';
import { RolesGuard } from './roles.guard'; 

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
    if (!this.isValidTimesheet(timesheetData)) {
      throw new BadRequestException('Invalid timesheet data');
    }

    timesheetData.status = 'Pendiente';
    const createdTimesheet = await this.timesheetService.create(timesheetData);
    return createdTimesheet;
  }

  @Put('review/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard) 
  @Roles(UserRole.ADMIN)
  async reviewTimesheet(
    @Param('id') id: number,
    @Body('status') status: string,
  ) {
    if (!this.isValidStatus(status)) {
      throw new BadRequestException('Invalid status provided');
    }

    return this.timesheetService.reviewTimesheet(id, status);
  }

  private isValidTimesheet(timesheetData: Timesheet): boolean {
    return timesheetData.hours > 0 && timesheetData.hourlyRate > 0;
  }

  private isValidStatus(status: string): boolean {
    return status === 'Aprobada' || status === 'Rechazada';
  }
}
