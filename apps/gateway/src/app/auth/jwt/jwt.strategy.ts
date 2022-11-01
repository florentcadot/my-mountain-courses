import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ForbiddenException, Injectable } from '@nestjs/common';
import {User, UsersService} from '@my-mountain-courses/mountain-courses-lib'
import {ConfigService} from '@nestjs/config'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
  private readonly usersService: UsersService,
  private readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    try {
      const user: User = await this.usersService.getUserByEmail(payload.email);
      return user
    } catch (e){
      throw new ForbiddenException('User found');
    }
  }
}
