import { Module } from '@nestjs/common';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { FactorialModule } from './factorial/factorial.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    FibonacciModule,
    FactorialModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
