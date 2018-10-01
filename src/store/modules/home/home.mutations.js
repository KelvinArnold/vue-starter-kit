// Import Mutation Types
import { SUCCESS, ERROR, LOADING } from './../../mutation-types';
import {updateField} from 'vuex-map-fields';

// Mutations
const mutations = {
  updateField,
  [SUCCESS](state) {
    state.success = true;
    state.error = false;
  },
  [ERROR](state, error) {
    state.success = false;
    state.error = error;
  },
  [LOADING](state, loading) {
    state.loading = loading;
  }
};
export default mutations;