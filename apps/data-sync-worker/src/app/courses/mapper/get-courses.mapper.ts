import { GetCourseDto } from '../dto/get-course.dto';
import { Course } from '../course.entity';

export const toDomain = (props: GetCourseDto): Course  => ({
  label: props.label,
  peakName: props.peakName,
  type: props.type,
  grade: props.grade,
  topElevation: props.topElevation,
  elevationGain: props.elevationGain,
  elevationLoss: props.elevationLoss,
  routeDescription: props.routeDescription,
  massif: props.massif,
  positionInRopeLine: props.positionInRopeLine,
  height: props.height,
  date: new Date(props.date),
  attendants: props.attendants.split(' ').join('').split(','),
});
