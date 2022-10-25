import { Test, TestingModule } from '@nestjs/testing';
import { ProcessFileService } from './process-file.service';

describe('ProcessFileService', () => {
  let service: ProcessFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcessFileService],
    }).compile();

    service = module.get<ProcessFileService>(ProcessFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
