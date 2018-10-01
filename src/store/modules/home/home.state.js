import Item from './../../../models/Item';
// State
const state = {
  success: false,
  error: false,
  loading: false,
  list: [],
  item: new Item()
};
export default state;