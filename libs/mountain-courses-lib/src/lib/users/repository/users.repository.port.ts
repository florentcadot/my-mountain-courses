import {User} from '../user.entity'
import {CreateUserDto} from '../dto/create-user.dto'

export abstract class UsersRepository {
  abstract getUserByEmail(email: string): Promise<User>
  abstract createUser(props: CreateUserDto): Promise<User>
}
