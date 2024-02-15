// timesheet.service.ts

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

  // Agrega más métodos según sea necesario para manipular las hojas de tiempo
}
