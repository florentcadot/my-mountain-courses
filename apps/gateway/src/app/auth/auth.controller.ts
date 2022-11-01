import {Controller, Get, Post, Req, Res, UseGuards} from '@nestjs/common'
import {Response} from 'express'
import {User, UsersService} from '@my-mountain-courses/mountain-courses-lib'
import {AuthService} from './auth.service'
import {SamlAuthGuard} from './saml/saml-auth.guard'
import {RequestWithUser} from './dto/request-with-user.dto'
import {ConfigService} from '@nestjs/config'

@Controller()
export class AuthController {
  private readonly frontScheme = this.configService.get<string>('FRONT_SCHEME')
  private readonly frontHost = this.configService.get<string>('FRONT_PORT')
  private readonly frontPort = this.configService.get<string>('FRONT_PORT')

  constructor(
    private readonly appService: AuthService,
    private usersService: UsersService,
    private configService: ConfigService
  ) {
  this.frontScheme = this.configService.get<string>('FRONT_SCHEME')
  this.frontHost = this.configService.get<string>('FRONT_PORT')
  this.frontPort = this.configService.get<string>('FRONT_PORT')
  }

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
      this, res.redirect(`${this.frontScheme}://${this.frontHost}:${this.frontPort}/?jwt=${jwt}`);
    }
  }
}
