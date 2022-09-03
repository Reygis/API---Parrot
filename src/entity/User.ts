import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn 
} from "typeorm"
import {Length, IsNotEmpty} from "class-validator"
import * as bcrypt from "bcryptjs"

@Entity()
@Unique(["email"])
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Length(4, 70)
    name: string
    
    @Column()
    @Length(4, 70)
    email: string
    
    @Column()
    apartment: number
    
    @Column()
    @Length(6, 120)
    password: string

    @Column()
    @IsNotEmpty()
    role: string

    @Column()
    @CreateDateColumn()
    createdAt: Date

    @Column()
    @UpdateDateColumn()
    updatedAt: Date

    hashPassword(){
        this.password = bcrypt.hashSync(this.password, 8)
    }

    checkIfUnencryptedPasswordIsValid(unecripytedPassword: string){
        return bcrypt.compareSync(unecripytedPassword, this.password)
    }
}
