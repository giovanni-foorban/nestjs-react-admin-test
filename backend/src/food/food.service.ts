import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Food } from './food.entity';

@Injectable()
export class FoodService extends TypeOrmCrudService<Food> {
    constructor(@InjectRepository(Food) repo) {
      super(repo);
    }
}