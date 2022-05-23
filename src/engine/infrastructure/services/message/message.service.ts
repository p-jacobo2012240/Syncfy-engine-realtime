import { Injectable } from '@nestjs/common';
import { PhraseCreatorDomainDto } from 'src/engine/domain/phrase-creator.domain';
import { MessageRepositoryImpl } from '../../repositories/message.repository';

@Injectable()
export class MessageService {

    constructor(
        private messageRepository: MessageRepositoryImpl
    ){}

    /**
     * 
     * this method should call text to 
     * speech  https://github.com/googleapis/nodejs-text-to-speech 
     * with the results send from client, also saved into database
     * @param phraseCreatorDomainDto
    */
    async createNewAudioWithPhrase(phraseCreatorDomainDto: PhraseCreatorDomainDto) {
        // first step = persist record
       return await this.messageRepository.save(phraseCreatorDomainDto);
    }
}
