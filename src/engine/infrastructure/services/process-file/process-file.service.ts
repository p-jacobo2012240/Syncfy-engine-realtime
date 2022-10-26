import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';

@Injectable()
export class ProcessFileService {

    // https://yarnpkg.com/package/copyfiles
    readonly pathFrom = "C:/github/test-path-files/From";
    readonly pathTo = "C:/github/test-path-files/to";

    moveFilePathToPath(){
        try {
            fs.copySync(this.pathFrom, this.pathTo, { recursive: true })
            console.log('success!')
        } catch (err) {
            console.error(err)
        }
    }
}
