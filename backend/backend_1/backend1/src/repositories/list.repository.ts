import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DemoTrainingDataSource} from '../datasources';
import {List, ListRelations} from '../models';

export class ListRepository extends DefaultCrudRepository<
  List,
  typeof List.prototype.id,
  ListRelations
> {
  constructor(
    @inject('datasources.Demo_training') dataSource: DemoTrainingDataSource,
  ) {
    super(List, dataSource);
  }
}
