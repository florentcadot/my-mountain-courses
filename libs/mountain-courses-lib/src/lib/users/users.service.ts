import { Injectable } from '@nestjs/common';
import {UsersRepository} from './repository/users.repository.port'
import {User} from './user.entity'

@Injectable()
export class UsersService {

  constructor(
    private usersRepository: UsersRepository
  ) {}

  async createUser(user: User): Promise<User> {
    try {
      return await this.usersRepository.createUser({...user})
    } catch (e){
      throw new Error('DB error')
    }
  }

  async getUserByEmail(email: string): Promise<User> {
    try{
    return await this.usersRepository.getUserByEmail(email)
    } catch (e) {
      throw new Error('DB Error')
    }
  }
}
