import { INote } from '../model/note-model.interface';

export interface INoteController {
  create: (createArgs: Omit<INote, 'id'>) => Promise<INote>;
  findAll: () => Promise<INote[]>;
  findOne: (id: string) => Promise<INote>;
  update: (id: string, updateArgs: Partial<INote>) => Promise<INote>;
  delete: (id: string) => Promise<INote[]>;
}
