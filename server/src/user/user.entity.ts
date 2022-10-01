import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

import { Board } from '../board/board.entity';
import { Section } from '../section/section.entity';
import { Task } from '../task/task.entity';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Board, (board) => board.user)
  boards: Board[];

  @OneToMany(() => Section, (section) => section.user)
  sections: Section[];

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
