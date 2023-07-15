import { Module } from '@nestjs/common';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { FactorialModule } from './factorial/factorial.module';

@Module({
  imports: [FibonacciModule, FactorialModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
