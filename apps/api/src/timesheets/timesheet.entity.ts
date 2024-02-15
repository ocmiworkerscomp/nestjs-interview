// timesheet.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Timesheet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hours: number;

  @Column()
  hourlyRate: number;

  @Column()
  status: string; // Aquí defines la propiedad 'status'
}
