import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Timesheet } from './timesheet.entity';

@Injectable()
export class TimesheetService {
  constructor(
    @InjectRepository(Timesheet)
    private timesheetRepository: Repository<Timesheet>,
  ) {}

  async create(timesheetData: Timesheet): Promise<Timesheet> {
    const newTimesheet = this.timesheetRepository.create(timesheetData);
    newTimesheet.status = 'Pendiente';
    return await this.timesheetRepository.save(newTimesheet);
  }

  async getTimesheetsForUser(userId: number): Promise<Timesheet[]> {
    return this.timesheetRepository
      .createQueryBuilder('timesheet')
      .where('timesheet.userId = :userId', { userId })
      .getMany();
  }

  async reviewTimesheet(id: number, newStatus: string): Promise<Timesheet> {
    const timesheet = await this.timesheetRepository.findOne({ where: { id } });
    if (!timesheet) {
      return null;
    }

    timesheet.status = newStatus;
    return await this.timesheetRepository.save(timesheet);
  }
}
