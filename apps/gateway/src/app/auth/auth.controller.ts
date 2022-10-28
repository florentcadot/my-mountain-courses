import {Controller, Get, Post, Req, Res, UseGuards} from '@nestjs/common'
import {Response} from 'express'
import {User, UsersService} from '@my-mountain-courses/mountain-courses-lib'
import {AuthService} from './auth.service'
import {SamlAuthGuard} from './saml/saml-auth.guard'
import {RequestWithUser} from './dto/request-with-user.dto'

@Controller()
export class AuthController {
  constructor(private readonly appService: AuthService, private usersService: UsersService) {}

  @Get('/auth/sso/saml/login')
  @UseGuards(SamlAuthGuard)
  async samlLogin() {
    return;
  }

  @Post('/auth/sso/saml/ac')
  @UseGuards(SamlAuthGuard)
  async samlAssertionConsumer(
    @Req() req: RequestWithUser,
    @Res() res: Response,
  ) {
    if (req.user) {
      const user = req.user as User;
      const jwt = this.appService.getTokenForUser(user);
      await this.usersService.createUser(user);
      this, res.redirect('http://localhost:4200/?jwt=' + jwt);
    }
  }
}
