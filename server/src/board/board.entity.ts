import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Task } from '../task/task.entity';
import { User } from '../user/user.entity';
import { Section } from '../section/section.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => User, (user) => user.boards)
  user: User;

  @OneToMany(() => Section, (section) => section.board)
  sections: Section[];

  @OneToMany(() => Task, (task) => task.board)
  tasks: Task[];
}
