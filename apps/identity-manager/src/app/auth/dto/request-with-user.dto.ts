import {User} from '../../../../../../libs/mountain-courses-lib/src/lib/users/user.entity'

export interface RequestWithUser extends Request {
  user: User
}
