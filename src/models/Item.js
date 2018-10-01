class Item {
  constructor(name = "", content = "") {
    this._name = name;
    this._content = content;
  }
  get name()    { return this._name }
  get content() { return this._content }
}
export default Item;