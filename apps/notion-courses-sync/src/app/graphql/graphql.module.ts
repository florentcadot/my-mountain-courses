import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CoursesModule } from '../courses/courses.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        debug: false,
        playground: true,
        include: [CoursesModule],
        autoSchemaFile: join(
          process.cwd(),
          'apps/data-sync-worker/assets/schema.gql'
        ),
      }),
    }),
  ],
})
export class GraphqlModule {}
