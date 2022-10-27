import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_db_message'})
export class Message {

    @PrimaryGeneratedColumn({ name: 'message_id'})
    messageId: number;

    @Column({ name: 'socket_id'})
    socketId: string;

    @Column({ name: 'content'})
    content: string;
}