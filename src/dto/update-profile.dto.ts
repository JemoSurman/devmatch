import { IsString, Length } from "class-validator";

export class UpdateProfileDto {
    @IsString()
    @Length(3, 100)
    readonly name: string;

    @IsString()
    readonly description: string;
}