import {IsString} from 'class-validator'
import {Transform} from 'class-transformer'
export class CreateMessageDto {
    @IsString()
    content: string;


}

