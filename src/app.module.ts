import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [AccountModule, BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
