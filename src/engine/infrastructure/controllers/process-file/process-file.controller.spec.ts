import { Test, TestingModule } from '@nestjs/testing';
import { ProcessFileController } from './process-file.controller';

describe('ProcessFileController', () => {
  let controller: ProcessFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcessFileController],
    }).compile();

    controller = module.get<ProcessFileController>(ProcessFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
