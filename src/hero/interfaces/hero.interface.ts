import { IsNumber, IsString } from '@nestjs/class-validator';

export class Hero {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}
