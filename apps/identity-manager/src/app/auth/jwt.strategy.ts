import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ForbiddenException, Injectable } from '@nestjs/common';
import {UsersService} from '../../../../../libs/mountain-courses-lib/src/lib/users/users.service'
import {User} from '../../../../../libs/mountain-courses-lib/src/lib/users/user.entity'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.AUTH_SECRET,
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
