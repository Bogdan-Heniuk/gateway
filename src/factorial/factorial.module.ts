import { Module } from '@nestjs/common';
import { FactorialController } from './factorial.controller';
import { FactorialService } from './factorial.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'FACTORIAL_SERVICE',
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            queue: configService.get<string>('RMQ_FACTORIAL_QUEUE'),
            urls: [configService.get<string>('RMQ_URL')],
            queueOptions: { durable: false },
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [FactorialController],
  providers: [FactorialService],
})
export class FactorialModule {}
