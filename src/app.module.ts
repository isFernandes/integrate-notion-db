import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotionsModule } from './notions/notions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NotionsModule,
  ],
})
export class AppModule {}
