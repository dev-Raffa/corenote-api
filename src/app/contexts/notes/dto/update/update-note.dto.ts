import { maxValue } from '../../../../../utils/decorators/maxValue/maxValue.decorator';
import { INote } from '../../interfaces/model/note-model.interface';

export class UpdateNoteDTO implements Partial<Omit<INote, 'id'>> {
  title?: string;
  content?: string;
  @maxValue({ max: 12 })
  colorOption?: number;
  isFavorite?: boolean;

  constructor(args: Partial<Omit<INote, 'id'>>) {
    args.title && (this.title = args.title);
    args.content && (this.content = args.content);
    args.colorOption && (this.colorOption = args.colorOption);
    args.isFavorite && (this.isFavorite = args.isFavorite);
  }
}
