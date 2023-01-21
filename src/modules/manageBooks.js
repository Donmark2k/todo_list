const array = [];
export default class Tasks {
  constructor(description) {
    this.description = description;
    this.index = array.length + 1;
    this.completed = false;
  }
}
