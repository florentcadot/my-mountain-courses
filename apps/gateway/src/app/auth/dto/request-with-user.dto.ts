import {User} from '@my-mountain-courses/mountain-courses-lib'

export interface RequestWithUser extends Request {
  user: User
}
