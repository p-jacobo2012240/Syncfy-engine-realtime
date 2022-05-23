import { InjectRepository } from "@nestjs/typeorm";
import { MessageRepository } from "src/engine/application/repositories/message-repository";
import { PhraseCreatorDomainDto } from "src/engine/domain/phrase-creator.domain";
import { Repository } from "typeorm";
import { Message } from "../entities/message.entity";

export class MessageRepositoryImpl implements MessageRepository {

    constructor(
        @InjectRepository(Message) private taskRepository: Repository<Message>,
    ) {}
    
    async save(domain: PhraseCreatorDomainDto): Promise<void> {
        const { text } = domain;
        
        const entity = new Message();
        entity.content = text;
        entity.socketId = 'THIS_IS_A_TEMPORAL_SOCKET_ID_ASD123456@@234';

        await this.taskRepository.save(entity);
    }



}