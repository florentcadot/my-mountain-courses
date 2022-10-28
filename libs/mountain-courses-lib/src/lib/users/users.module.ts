import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import {User} from './user.entity'
import {UsersRepository} from './repository/users.repository.port'
import {RealUsersRepository} from './repository/real.users.repository'
import {UsersService} from './users.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    UsersService,
    {
      provide: UsersRepository,
      useClass: RealUsersRepository,
    },
  ],
  exports: [
    UsersService,
    {
      provide: UsersRepository,
      useClass: RealUsersRepository,
    },
  ]
})
export class UsersModule {}
