import { Module } from '@nestjs/common';
import { FactorialController } from './factorial.controller';
import { FactorialService } from './factorial.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'FACTORIAL_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost'],
          queue: 'factorial_queue',
          noAck: false,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [FactorialController],
  providers: [FactorialService],
})
export class FactorialModule {}
