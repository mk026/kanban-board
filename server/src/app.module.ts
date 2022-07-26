import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [BoardModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
