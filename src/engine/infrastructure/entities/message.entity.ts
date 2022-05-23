import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    messageId: number;

    @Column()
    socketId: string;

    @Column()
    content: string;
}