import { Injectable } from "@nestjs/common";
import {User} from '@my-mountain-courses/mountain-courses-lib'
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) {}
  getTokenForUser(user: User) {
    const payload = {
      user: user.email,
    };
    return this.jwtService.sign(payload);
  }
}
