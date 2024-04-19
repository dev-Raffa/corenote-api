import { Module } from '@nestjs/common';
import { NoteModule } from './contexts/notes/note.module';
import { AppGuard } from './middlewares/guard/app.guard';

@Module({
  imports: [NoteModule],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: AppGuard
    }
  ]
})
export class AppModule {}
