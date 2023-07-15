import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class FactorialService {
  constructor(@Inject('FACTORIAL_SERVICE') private client: ClientProxy) {}

  calcFactorial(num: number): Observable<number> {
    return this.client.send({ cmd: 'calc_factorial' }, JSON.stringify(num));
  }
}
