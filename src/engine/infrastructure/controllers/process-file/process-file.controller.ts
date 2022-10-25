import { Controller, Post } from '@nestjs/common';
import { ProcessFileService } from '../../services/process-file/process-file.service';

@Controller('process-file')
export class ProcessFileController {

    constructor(
        private processFileService: ProcessFileService
    ) {}
    
    @Post('/send-to-bucket')
    executeFile() {
        this.processFileService.moveFilePathToPath();
    }

}
