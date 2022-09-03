import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn ,
    ManyToOne,
    JoinColumn
} from "typeorm"
import {Length, IsNotEmpty} from "class-validator"
import { User } from "./User"


@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Length(4, 300)
    content: string
    
    @Column()
    @CreateDateColumn()
    createdAt: Date

    @Column()
    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => User, user => user.post) 

    @JoinColumn({ name: 'user_id' })
    user: User
}    