import { IsNumber } from '@nestjs/class-validator';

export class HeroById {
  @IsNumber()
  id: number;
}
