import {Controller, Get, Post, UseGuards, Res, Req} from '@nestjs/common'
import {SamlAuthGuard} from './saml-auth.guard'
import { Response } from 'express';
import {User} from '../../../../../libs/mountain-courses-lib/src/lib/users/user.entity'
import {RequestWithUser} from './dto/request-with-user.dto'
import {AuthService} from './auth.service'
import {UsersService} from '../../../../../libs/mountain-courses-lib/src/lib/users/users.service'

@Controller()
export class AuthController {

  constructor(private authService: AuthService, private usersService: UsersService) {}

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
      const jwt = this.authService.getTokenForUser(user);
      await this.usersService.createUser(user);
      this, res.redirect('http://localhost:4200/?jwt=' + jwt);
    }
  }
}
