import { Test, TestingModule } from '@nestjs/testing';
import { HandlebridgeController } from './handlebridge.controller';

describe('HandlebridgeController', () => {
  let controller: HandlebridgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HandlebridgeController],
    }).compile();

    controller = module.get<HandlebridgeController>(HandlebridgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
