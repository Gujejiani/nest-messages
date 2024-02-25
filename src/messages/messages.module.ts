import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessageRepository } from './messages.repository';

@Module({
  imports: [],
  controllers: [MessagesController],
  providers: [MessagesService, MessageRepository],
})
export class MessagesModule {}
