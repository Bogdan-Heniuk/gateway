import { Controller, Get, Param } from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';
import { Observable } from 'rxjs';
import { ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('Fibonacci')
@Controller('/fibonacci')
export class FibonacciController {
  constructor(private readonly fibonacciService: FibonacciService) {}

  @ApiParam({ name: 'index', type: Number })
  @Get('/:index')
  calcFibonacci(@Param() params: any): Observable<number> {
    const { index } = params;
    return this.fibonacciService.calcFibonacci(Number(index));
  }
}
