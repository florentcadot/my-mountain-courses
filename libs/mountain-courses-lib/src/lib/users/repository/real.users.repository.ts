import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {UsersRepository} from './users.repository.port'
import {User} from '../user.entity'
import {CreateUserDto} from '../dto/create-user.dto'

@Injectable()
export class RealUsersRepository extends UsersRepository  {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,) {
    super()
  }

  async createUser(props: CreateUserDto): Promise<User> {
    return await this.usersRepository.save(props)
  }

  async getUserByEmail(email:string): Promise<User> {
    return await this.usersRepository.findOneBy({email})
  }

}
