import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Course {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  label: string;

  @Column()
  peakName: string;

  @Column()
  type: string; //TO CONVERT TO ENUM

  @Column()
  grade: string;

  @Column()
  topElevation: number;

  @Column()
  elevationGain: number;

  @Column()
  elevationLoss: number;

  @Column()
  routeDescription: string;

  @Column()
  massif: string;

  @Column()
  positionInRopeLine: string;

  @Column()
  height: number;

  @Column()
  date: Date;

  @Column('text',{ array: true })
  attendants: string[];
}
