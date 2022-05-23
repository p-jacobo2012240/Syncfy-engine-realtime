import { Test, TestingModule } from '@nestjs/testing';
import { HandlebridgeService } from './handlebridge.service';

describe('HandlebridgeService', () => {
  let service: HandlebridgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HandlebridgeService],
    }).compile();

    service = module.get<HandlebridgeService>(HandlebridgeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
