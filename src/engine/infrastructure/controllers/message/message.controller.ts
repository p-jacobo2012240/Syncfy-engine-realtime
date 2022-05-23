import { Body, Controller, Post } from '@nestjs/common';
import { PhraseCreatorDomainDto } from 'src/engine/domain/phrase-creator.domain';
import { MessageService } from '../../services/message/message.service';

@Controller('message')
export class MessageController {

    constructor(
        private messageService: MessageService
    ) {}

    @Post('/phrase')
    createNewAudioWithPhrase(@Body() phraseCreatorDomainDto: PhraseCreatorDomainDto ) {
        return this.messageService.createNewAudioWithPhrase(phraseCreatorDomainDto);
    }
}
