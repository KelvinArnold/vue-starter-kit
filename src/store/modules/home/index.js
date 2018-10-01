import actions from './home.actions';
import getters from './home.getters';
import mutations from './home.mutations';
import state from './home.state';

const ModuleHome = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default ModuleHome;