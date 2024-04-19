import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { INote } from '../interfaces/model/note-model.interface';

@Entity()
export class NoteEntity implements INote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  content?: string;

  @Column()
  colorOption: number;

  @Column()
  isFavorite: boolean;
}
