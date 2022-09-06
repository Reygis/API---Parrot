import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from "typeorm"
import {Length, IsNotEmpty} from "class-validator"
import bcrypt from "bcryptjs"
import { Post } from "./Post"

@Entity()
@Unique(["email"])
export class User {
    @PrimaryGeneratedColumn()
    iduser: number

    @Column()
    @Length(4, 70)
    name: string
    
    @Column({unique: true})
    @Length(4, 70)
    email: string
    
    @Column()
    apartment: number
    
    @Column()
    @Length(6, 120)
    password: string

    @Column()
    @Length(0, 255)    
    userphoto: string

    @Column()
    @IsNotEmpty()
    role: string

    @Column()
    @CreateDateColumn()
    createdAt: Date

    @Column()
    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Post, post => post.user)
    post: Post[]

    hashPassword(){
        this.password = bcrypt.hashSync(this.password, 8)
    }

    checkIfUnencryptedPasswordIsValid(unecripytedPassword: string){
        return bcrypt.compareSync(unecripytedPassword, this.password)
    }

}