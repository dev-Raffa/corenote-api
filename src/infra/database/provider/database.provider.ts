import 'dotenv/config';

import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { NoteEntity } from '../../../app/contexts/notes/entity/note.entity';

export const databaseProvider: Provider[] = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [NoteEntity],
        synchronize: true
      });

      return dataSource.initialize();
    }
  }
];
