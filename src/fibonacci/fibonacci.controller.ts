import { Controller, Get, Param } from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';
import { Observable } from 'rxjs';

@Controller('/fibonacci')
export class FibonacciController {
  constructor(private readonly fibonacciService: FibonacciService) {}

  @Get('/:index')
  calcFibonacci(@Param() params: any): Observable<number> {
    const { index } = params;
    return this.fibonacciService.calcFibonacci(Number(index));
  }
}
