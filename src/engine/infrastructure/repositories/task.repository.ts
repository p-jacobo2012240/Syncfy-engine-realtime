import { InjectRepository } from "@nestjs/typeorm";
import { TaskRepository } from "src/engine/application/repositories/task-repository";
import { TaskCreatorDomain } from "src/engine/domain/task-creator.domain";
import { TaskDomain } from "src/engine/domain/task.domain";
import { Repository } from "typeorm";
import { Task } from "../entities/task.entity";

export class TaskRepositoryImpl implements TaskRepository {
    
    constructor(
        @InjectRepository(Task) private repTask: Repository<Task>,
    ) {}
    
    saveNewTask(taskCreatorDomain: TaskCreatorDomain) {
        const { name, runEach } = taskCreatorDomain;

        const entity = new Task();
        entity.createdAt = new Date();
        entity.name = name;
        entity.runEach = runEach;

        const taskSaved = this.repTask.save(entity);
    }
    
    save(domain: TaskDomain): Promise<void> {
        throw new Error("Method not implemented.");
    }
}