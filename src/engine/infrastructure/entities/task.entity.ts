import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_db_task' })
export class Task {

    @PrimaryGeneratedColumn({ name: 'task_id'})
    taskId: number;

    @Column({ name: 'name'})
    name: String;

    @Column({ name: 'run_each'})
    runEach: String;

    @Column({name: 'created_at'})
    createdAt: Date;
}