import { Controller, Post, Res } from '@nestjs/common/decorators';

@Controller()
export class AuthController {
  constructor() {}

  @Post('login')
  login(@Res() res): any {
    res.status(501).send();
  }
}
