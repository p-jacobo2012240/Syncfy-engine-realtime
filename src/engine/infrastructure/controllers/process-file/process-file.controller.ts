import { Body, Controller, Post } from '@nestjs/common';
import { TaskCreatorDomain } from 'src/engine/domain/task-creator.domain';
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

    @Post('/new-task')
    createNewTask(@Body() TaskCreatorDomain: TaskCreatorDomain) {
        return this.processFileService.createNewTask(TaskCreatorDomain);
    }
}
