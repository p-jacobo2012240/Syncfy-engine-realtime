import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';
import { TaskCreatorDomain } from 'src/engine/domain/task-creator.domain';
import { TaskRepositoryImpl } from '../../repositories/task.repository';

@Injectable()
export class ProcessFileService {

    // https://yarnpkg.com/package/copyfiles
    readonly pathFrom = "C:/github/test-path-files/From";
    readonly pathTo = "C:/github/test-path-files/to";

    constructor(private taskRepositoy: TaskRepositoryImpl){}

    moveFilePathToPath(){
        try {
            fs.copySync(this.pathFrom, this.pathTo, { recursive: true })
            console.log('success!')
        } catch (err) {
            console.error(err)
        }
    }

    createNewTask(taskCreatorDomain: TaskCreatorDomain) {
        return this.taskRepositoy.saveNewTask(taskCreatorDomain);
    }


}
