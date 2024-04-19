import { APP_PIPE } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infra/database/database.module';
import { registerProviders } from '../../../utils/helpers/register-providers/register-providers.helper';
import { NoteEntity } from './entity/note.entity';
import { NoteService } from './service/note.service';
import { NoteValidatorPipe } from './middlewares/validator/note-validator.pipe';
import { NoteController } from './controller/note.controller';

@Module({
  imports: [DatabaseModule],
  providers: registerProviders({
    entity: NoteEntity,
    service: NoteService,
    others: [{ provide: APP_PIPE, useClass: NoteValidatorPipe }]
  }),
  controllers: [NoteController]
})
export class NoteModule {}
