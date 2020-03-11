import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Food } from './food.entity';
import { FoodService } from './food.service';

@Crud({
    model: {
      type: Food,
    },
  })
  @Controller('food')
  export class FoodController {
    constructor(public service: FoodService) {}
  }