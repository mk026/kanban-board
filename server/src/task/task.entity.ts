import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from '../user/user.entity';
import { Board } from '../board/board.entity';
import { Section } from '../section/section.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  order: number;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;

  @ManyToOne(() => Board, (board) => board.tasks)
  board: Board;

  @ManyToOne(() => Section, (section) => section.tasks)
  section: Section;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
