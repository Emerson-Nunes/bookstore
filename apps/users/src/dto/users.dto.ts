import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserDTO {
    
    @IsNotEmpty()
    id: number;

    @IsString()
    firstName: string;

    @IsString()
    lastName:string;

    @IsNumber()
    age: number;
    
}