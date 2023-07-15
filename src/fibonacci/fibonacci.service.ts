import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class FibonacciService {
  constructor(@Inject('FIBONACCI_SERVICE') private client: ClientProxy) {}

  calcFibonacci(index: number): Observable<number> {
    return this.client.send({ cmd: 'calc_fibonacci' }, JSON.stringify(index));
  }
}
