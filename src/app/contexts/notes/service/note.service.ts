import { Injectable } from '@nestjs/common';
import { SimpleService } from '../../../../utils/builders/service/simple.service';
import { INote } from '../interfaces/model/note-model.interface';
import { INoteService } from '../interfaces/service/note-service.interface';

@Injectable()
export class NoteService extends SimpleService<INote> implements INoteService {}
