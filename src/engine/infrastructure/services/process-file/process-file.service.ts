import { Injectable } from '@nestjs/common';
import copyfiles = require("copyfiles");

@Injectable()
export class ProcessFileService {

    // https://yarnpkg.com/package/copyfiles
    readonly pathFrom = "C:\github\test-path-files\From";
    readonly pathTo = "C:\github\test-path-files\to";

    moveFilePathToPath(){
        copyfiles([ this.pathFrom, this.pathTo], {}, (err) => {
            if (err) {
              console.log("Error occurred while copying",err);
            }
            console.log("folder(s) copied to destination");
          });
    }
}
