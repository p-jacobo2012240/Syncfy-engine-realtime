import { Module } from '@nestjs/common';
import { MessageController } from './controllers/message/message.controller';
import { HandlebridgeController } from './controllers/handlebridge/handlebridge.controller';
import { HandlebridgeService } from './services/handlebridge/handlebridge.service';
import { MessageService } from './services/message/message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { MessageRepositoryImpl } from './repositories/message.repository';
import { ProcessFileController } from './controllers/process-file/process-file.controller';
import { ProcessFileService } from './services/process-file/process-file.service';

@Module({
  imports:  [TypeOrmModule.forFeature([Message])],
  controllers: [MessageController, HandlebridgeController, ProcessFileController],
  providers: [HandlebridgeService, MessageService, MessageRepositoryImpl, ProcessFileService]
})
export class InfrastructureModule {}
