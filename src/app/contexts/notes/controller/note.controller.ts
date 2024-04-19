import { Controller } from '@nestjs/common';
import { SimpleController } from '../../../../utils/builders/controller/simple.controller';
import { INoteController } from '../interfaces/controller/note-controller.interface';
import { INote } from '../interfaces/model/note-model.interface';
import { INoteService } from '../interfaces/service/note-service.interface';

@Controller('notes')
export class NoteController
  extends SimpleController<INote, INoteService>
  implements INoteController {}
