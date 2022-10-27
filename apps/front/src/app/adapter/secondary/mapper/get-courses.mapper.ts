import {Course} from '../../../core/entity/course'
import {GetCoursesDto} from '../dto/get-courses.dto'

export const toDomain = (props: GetCoursesDto) => {
  return new Course({...props})
}
