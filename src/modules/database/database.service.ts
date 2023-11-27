import { Injectable } from '@nestjs/common';
import { db } from './database.provider';

@Injectable()
export class DatabaseService {
  async query<T>(query: string, parameters: any[] = []): Promise<T[]> {
    try {
      return await db.any<T>(query, parameters);
    } catch (error) {
      await this.close();
      console.error('Ошибка при выполнении:', error);
      throw new Error('Ошибка при выполнении');
    } finally {
      // if (!db.$pool.ended) {
      //   db.$pool.end().then(() => console.log('Пул соединений закрыт'));
      // }
    }
  }

  async close() {
    return await db.$pool.end();
  }
}
