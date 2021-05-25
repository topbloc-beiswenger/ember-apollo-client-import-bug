import Route from '@ember/routing/route';
import { queryManager } from 'ember-apollo-client';
import query from 'ember-apollo-client-import-bug/gql/queries/launches.graphql';

export default class IndexRoute extends Route {
  @queryManager apollo;
  model() {
    return this.apollo.watchQuery(query);
  }
}
