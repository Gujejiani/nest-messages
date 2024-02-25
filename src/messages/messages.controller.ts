import { Controller, Get, Post, Body, Param, NotFoundException, } from '@nestjs/common';
import { MessagesService } from './messages.service';
import {CreateMessageDto} from './dtos/create-message.dto'
@Controller('messages')
export class MessagesController {

  constructor(private readonly messagesService: MessagesService) {
    
  }

  @Get()
  getMessage() {
    return this.messagesService.findAll()
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body)
    return this.messagesService.create(body.content)
  }

  @Get('/:id')
  async getMessageById(@Param() param: {id: string}) {
    console.log('param ', param.id)
    const message =await this.messagesService.findOne(param.id)
   if(!message){
    return new NotFoundException('message not found')
   }
    return message
  }
}
