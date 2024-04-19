import { INote } from '../../interfaces/model/note-model.interface';
import { maxValue } from '../../../../../utils/decorators/maxValue/maxValue.decorator';

export class CreateNoteDTO implements Omit<INote, 'id'> {
  title: string;
  content?: string;

  @maxValue({ max: 12 })
  colorOption: number;
  isFavorite: boolean;

  constructor(args: Omit<INote, 'id'>) {
    this.title = args.title;
    this.content = args.content;
    this.colorOption = args.colorOption;
    this.isFavorite = args.isFavorite;
  }
}
