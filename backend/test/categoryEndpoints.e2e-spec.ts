import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common/interfaces';
import * as request from 'supertest';
import { CategoryModule } from './../src/category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './../src/ormconfig';

const expectedCategories = [
  'Різдво',
  'Їжа',
  'Новий рік',
  'День захисників і захисниць',
];

describe('GET /categories', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(ormconfig), CategoryModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return a list of all categories', async () => {
    const response = await request(app.getHttpServer())
      .get('/categories')
      .expect(200);

    expect(response.body.categories).toEqual(
      expect.arrayContaining(expectedCategories),
    );
  });
});
