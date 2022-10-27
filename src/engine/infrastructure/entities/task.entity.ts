import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_db_task' })
export class Task {

    @PrimaryGeneratedColumn()
    @Column({ name: 'task_id'})
    taskId: number;

    @Column({ name: 'name'})
    name: string;

    @Column({ name: 'run_each'})
    runEach: string;

    @Column({name: 'created_at'})
    createdAt: Date;
}