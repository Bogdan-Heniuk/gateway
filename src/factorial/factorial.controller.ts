import { Controller, Get, Param } from '@nestjs/common';
import { FactorialService } from './factorial.service';
import { Observable } from 'rxjs';

@Controller('/factorial')
export class FactorialController {
  constructor(private readonly factorialService: FactorialService) {}

  @Get('/:number')
  getHello(@Param() params: any): Observable<number> {
    const { number } = params;
    return this.factorialService.calcFactorial(Number(number));
  }
}
