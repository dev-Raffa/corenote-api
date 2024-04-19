import { ValidatorPiPe } from '../../../../../utils/decorators/validatorPipe/validator-pipe.decorator';
import { CreateNoteDTO } from '../../dto/create/create-note.dto';
import { UpdateNoteDTO } from '../../dto/update/update-note.dto';

@ValidatorPiPe({
  createDTO: CreateNoteDTO,
  updateDTO: UpdateNoteDTO
})
export class NoteValidatorPipe {}
