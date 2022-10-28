import { Module } from '@nestjs/common';
import {PassportModule} from '@nestjs/passport'
import {SamlAuthGuard} from './saml/saml-auth.guard'
import {SamlStrategy} from './saml/saml.strategy'
import {AuthService} from './auth.service'
import {AuthController} from './auth.controller'
import {JwtModule} from '@nestjs/jwt'
import {DatabaseModule, UsersModule} from '@my-mountain-courses/mountain-courses-lib'
import {JwtStrategy} from './jwt/jwt.strategy'


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.AUTH_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    DatabaseModule,
    UsersModule,
  ],
  providers: [
    SamlAuthGuard,
    SamlStrategy,
    AuthService,
    JwtStrategy
  ],
  controllers: [
    AuthController,
  ],
})
export class AuthModule {}
