import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { DatabaseService } from './database.service';

import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class DatabaseInitService implements OnModuleInit, OnModuleDestroy {
  constructor(private databaseService: DatabaseService) {}

  async onModuleInit() {
    await this.executeMultipleSqlFiles([
      '../../../src/modules/database/sql/drop-db.sql',
      '../../../src/modules/database/sql/init-db.sql',
      '../../../src/modules/database/sql/seed-db.sql',
    ]);
  }

  async executeSqlFile(filePath: string): Promise<void> {
    const fullPath = path.join(__dirname, filePath);
    const sql = fs.readFileSync(fullPath, 'utf8');
    await this.databaseService.query(sql);
  }

  async executeMultipleSqlFiles(filePaths: string[]): Promise<void> {
    for (const filePath of filePaths) {
      await this.executeSqlFile(filePath);
    }
  }

  async onModuleDestroy() {
    await this.databaseService.close();
  }
}
