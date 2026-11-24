import { Column, Entity } from 'typeorm';

@Entity('tasks')
export class TaskEntity {
  @Column()
  id: number;

  title: string;

  content: string;
}
