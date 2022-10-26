import { Field, Int, ID, ObjectType } from '@nestjs/graphql';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@ObjectType()
@Entity()
export class Course {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  @Field()
  label: string;

  @Column()
  @Field()
  peakName: string;

  @Column()
  @Field()
  type: string; //TO CONVERT TO ENUM

  @Column()
  @Field()
  grade: string;

  @Column()
  @Field(() => Int)
  topElevation: number;

  @Column()
  @Field(() => Int)
  elevationGain: number;

  @Column()
  @Field(() => Int)
  elevationLoss: number;

  @Column()
  @Field()
  routeDescription: string;

  @Column()
  @Field()
  massif: string;

  @Column()
  @Field()
  positionInRopeLine: string;

  @Column()
  @Field()
  height: number;

  @Column()
  @Field(() => Date)
  date: Date;

  @Column('text',{ array: true })
  @Field(() => [String])
  attendants: string[];
}
