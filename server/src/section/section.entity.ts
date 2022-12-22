import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Board } from '../board/board.entity';
import { User } from '../user/user.entity';
import { Task } from '../task/task.entity';

@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  order: number;

  @ManyToOne(() => Board, (board) => board.sections)
  board: Board;

  @ManyToOne(() => User, (user) => user.sections)
  user: User;

  @OneToMany(() => Task, (task) => task.section)
  tasks: Task[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
