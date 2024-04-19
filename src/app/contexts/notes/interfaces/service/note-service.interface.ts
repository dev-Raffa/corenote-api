import { INote } from '../model/note-model.interface';

export interface INoteService {
  add: (args: Omit<INote, 'id'>) => Promise<INote>;
  getAll: () => Promise<INote[]>;
  getOneById: (id: number) => Promise<INote>;
  update: (id: any, args: Partial<INote>) => Promise<INote>;
  delete: (id: number) => Promise<INote[]>;
}
