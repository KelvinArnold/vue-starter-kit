// Import HTTP
import HTTP from './../../../service/http';
import { POST_DEMO } from "./../../action-types";
import { SUCCESS, ERROR, LOADING } from "./../../mutation-types";
// Actions
const actions = {
  async [POST_DEMO]({commit, object}) {
    commit(LOADING);
    let url = `/`;
    await HTTP.post(url, object)
    .then(res => res.data)
    .then(() => {
      commit(SUCCESS);
    })
    .catch(e => {
      commit(ERROR, e);
    });
  },
};
export default actions;