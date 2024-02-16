import { Test, TestingModule } from '@nestjs/testing';
import { TimesheetService } from './timesheet.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Timesheet } from './timesheet.entity';

describe('TimesheetService', () => {
  let service: TimesheetService;
  let repository: Repository<Timesheet>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TimesheetService,
        {
          provide: getRepositoryToken(Timesheet),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<TimesheetService>(TimesheetService);
    repository = module.get<Repository<Timesheet>>(
      getRepositoryToken(Timesheet),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new timesheet with "Pendiente" status', async () => {
      const mockTimesheetData: Timesheet = {
        id: 0,
        hours: 0,
        hourlyRate: 0,
        status: '',
      };

      jest.spyOn(repository, 'create').mockReturnValueOnce(mockTimesheetData);
      jest.spyOn(repository, 'save').mockResolvedValueOnce(mockTimesheetData);

      const createdTimesheet = await service.create(mockTimesheetData);

      expect(repository.create).toHaveBeenCalledWith(mockTimesheetData);
      expect(repository.save).toHaveBeenCalledWith(mockTimesheetData);
      expect(createdTimesheet.status).toBe('Pendiente');
    });
  });
});
