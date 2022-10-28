
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {User} from '../users/user.entity'

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  getTokenForUser(user: User) {
    const payload = {
      user: user.email,
    };
    return this.jwtService.sign(payload);
  }
}
