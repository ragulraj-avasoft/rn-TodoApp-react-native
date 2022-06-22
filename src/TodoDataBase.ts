import Realm from 'realm';
import Todo from './models/Todo.model';

const schema = {
  name: 'todo',
  properties: {
    id: 'int',
    title: 'string',
    description: 'string',
    imageUri: 'string',
    createdAt: 'date',
  },
  primaryKey: 'id',
};

class AlterTodo {
  static async getrealm() {
    const realm = await Realm.open({
      path: 'myrealm',
      schema: [schema],
    });
    return realm;
  }
  public static async createTodo(todo: Todo) {
    let realm = await AlterTodo.getrealm();
    const allTodo: Todo[] = await JSON.parse(
      JSON.stringify(realm.objects('todo').sorted('id', true)),
    );
    let currentId: number = 0;
    if (allTodo.length === 0) {
      console.log('first');
      currentId = currentId + 1;
    } else {
      currentId = allTodo[0].id;
    }
    realm.write(() => {
      todo.id = currentId + 1;
      realm.create('todo', todo);
    });
  }
  static async getTodo(id: number) {
    let realm = await AlterTodo.getrealm();
    const singleTodo = realm.objectForPrimaryKey('Todo', id);
    return singleTodo;
  }
  static async getAllTodo() {
    let realm = await AlterTodo.getrealm();
    const allTodo: Todo[] = await JSON.parse(
      JSON.stringify(realm.objects('todo')),
    );
    return allTodo;
  }
  static async editTodo(id: number, todo: Todo) {
    let realm = await AlterTodo.getrealm();
    realm.write(async () => {
      let singleTodo: Todo = realm.objectForPrimaryKey('todo', id) || {
        id: 0,
        title: 'string',
        description: 'string',
        imageUri: 'string',
        createdAt: new Date(),
      };
      console.log(singleTodo);
      console.log(todo);
      singleTodo.id = todo.id;
      singleTodo.title = todo.title;
      singleTodo.description = todo.description;
      singleTodo.createdAt = todo.createdAt;
      singleTodo.imageUri = todo.imageUri;
    });
  }
  static async deleteTodo(id: number) {
    let realm = await AlterTodo.getrealm();
    realm.write(() => {
      const singleTodo = realm.objectForPrimaryKey('todo', id);
      realm.delete(singleTodo);
    });
  }
  static async getRealmObject() {
    let realm = await AlterTodo.getrealm();
    const todo = realm.objects('todo');
    return todo;
  }
}

export default AlterTodo;
