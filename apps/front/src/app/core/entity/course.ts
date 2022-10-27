interface Props {
  id: string,
  label: string,
  peakName: string,
  type: string[],
  grade: string,
  topElevation: number,
  elevationGain: number,
  elevationLoss: number,
  routeDescription: string,
  massif: string,
  positionInRopeLine:  number,
  height: number,
  date: Date,
  attendants: string[],
}

export class Course {
  constructor(private props: Props) {}

  get id(){
    return this.props.id
  }

  get label(){
    return this.props.label
  }

  get peakName(){
    return this.props.peakName
  }

  get type(){
    return this.props.type
  }

  get grade(){
    return this.props.grade
  }

  get topElevation(){
    return this.props.topElevation
  }

  get elevationGain(){
    return this.props.elevationGain
  }

  get elevationLoss(){
    return this.props.elevationLoss
  }

  get routeDescription(){
    return this.props.routeDescription
  }

  get massif(){
    return this.props.massif
  }

  get positionInRopeLine(){
    return this.props.positionInRopeLine
  }

  get height(){
    return this.props.height
  }

  get date(){
    return this.props.date
  }

  get attendants(){
    return this.props.attendants
  }
}
