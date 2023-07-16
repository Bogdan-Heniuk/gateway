import { Module } from '@nestjs/common';
import { FibonacciController } from './fibonacci.controller';
import { FibonacciService } from './fibonacci.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'FIBONACCI_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://rabbitmq'],
          queue: 'fibonacci_queue',
          noAck: false,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [FibonacciController],
  providers: [FibonacciService],
})
export class FibonacciModule {}
