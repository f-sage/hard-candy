import { Controller, Get } from '@nestjs/common/decorators';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAll(): Promise<{ categories: string[] }> {
    const categories = await this.categoryService.getAll();

    return { categories: categories.map((cat) => cat.name) };
  }
}
