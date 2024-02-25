import { Injectable } from '@nestjs/common';
import {MessageRepository} from './messages.repository'
@Injectable()
export class MessagesService {

  constructor(private messageRepo: MessageRepository){
 
    
  }
  getHello(): string {
    
    return 'Hello World!';

  }
   findOne(id: string){
    return this.messageRepo.findOne(id)
  }

   findAll(){
    return this.messageRepo.findAll()
  }
  create(content: string){
    return this.messageRepo.create(content)
  }
  
}
