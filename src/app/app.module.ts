import { Module } from '@nestjs/common';
import { NoteModule } from './contexts/notes/note.module';

@Module({
  imports: [NoteModule]
})
export class AppModule {}
