import { Controller, Get, Param } from '@nestjs/common';
import { FactorialService } from './factorial.service';
import { Observable } from 'rxjs';
import { ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('Factorial')
@Controller('/factorial')
export class FactorialController {
  constructor(private readonly factorialService: FactorialService) {}

  @ApiParam({ name: 'number updated', type: Number })
  @Get('/:number')
  getHello(@Param() params): Observable<number> {
    const { number } = params;
    return this.factorialService.calcFactorial(Number(number));
  }
}
