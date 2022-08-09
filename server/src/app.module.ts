import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './board/board.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { SectionModule } from './section/section.module';
import { UserModule } from './user/user.module';
import typeOrmConfig from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({ useFactory: typeOrmConfig }),
    BoardModule,
    SectionModule,
    TaskModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
