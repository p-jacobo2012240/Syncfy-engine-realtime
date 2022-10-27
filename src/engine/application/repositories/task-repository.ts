import { TaskCreatorDomain } from "src/engine/domain/task-creator.domain";
import { TaskDomain } from "src/engine/domain/task.domain";
import { IBaseRepository } from "./base-repository";

export interface TaskRepository extends IBaseRepository<TaskDomain> {
    
    saveNewTask(taskCreatorDomain: TaskCreatorDomain);
}