import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common/interfaces';
import { AuthModule } from './../../src/auth/auth.module';
import * as request from 'supertest';

describe.skip('POST /login', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should return 200 with a generated token for correct login and password', async () => {
    const data = {
      login: 'admin@gmail.com',
      password: 'admin',
    };
    const response = await request(app.getHttpServer())
      .post('/login')
      .send(data)
      .expect(200);

    expect(response.body.token).toBeDefined();
    expect(response.body.user).toBeDefined();
  });
  it('should return 401 if provided an incorrect password', async () => {
    const data = { login: 'admin@gmail.com', password: '123456' };
    return request(app.getHttpServer()).post('/login').send(data).expect(401);
  });
  it('should return 401 if provided a login that does not exist', async () => {
    const data = { login: 'admin123456@gmail.com', password: 'admin' };
    return request(app.getHttpServer()).post('/login').send(data).expect(401);
  });
});
