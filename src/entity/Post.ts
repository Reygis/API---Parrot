import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn ,
    ManyToOne,
    JoinColumn
} from "typeorm"
import {Length} from "class-validator"
import { User } from "./User"


@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    idpost: number

    @Column("varchar",{length:300})
    @Length(4, 300)
    content: string
    
    @Column()
    @CreateDateColumn()
    createdAt: Date

    @Column()
    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => User, user => user.post) 

    @JoinColumn({ name: 'user_iduser' })
    user: User
}    