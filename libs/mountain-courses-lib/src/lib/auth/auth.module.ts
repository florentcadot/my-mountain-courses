import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SamlAuthGuard } from './saml-auth.guard';
import { SamlStrategy } from './saml.strategy';
import {AuthController} from './auth.controller'
import {UsersModule} from '../users/users.module'
import {AuthService} from './auth.service'
import {JwtStrategy} from './jwt.strategy'
import {JwtAuthGuard} from './jwt-auth.guard'

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.AUTH_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    UsersModule,
  ],
  providers: [
    AuthService,
    JwtStrategy,
    JwtAuthGuard,
    SamlAuthGuard,
    SamlStrategy,
  ],
  controllers: [
    AuthController,
  ],
  exports: [
    // AuthService,
    SamlStrategy
  ],
})
export class AuthModule {}
