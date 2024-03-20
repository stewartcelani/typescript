import RefreshButton from './RefreshButton';

type Todo = {
  id: string;
  title: string;
  category: string;
  completed: boolean;
};

async function getTodos(): Promise<Todo[]> {
  try {
    return [
      {
        id: '1',
        title: 'Workout ' + Math.floor(Math.random() * 100),
        category: 'Fitness',
        completed: false
      },
      {
        id: '2',
        title: 'Do taxes ' + Math.floor(Math.random() * 100),
        category: 'Finance',
        completed: true
      },
      {
        id: '3',
        title: 'Walk the dog ' + Math.floor(Math.random() * 100),
        category: 'Family',
        completed: false
      }
    ];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen">
      List Page
      <RefreshButton />
      <div className="flex flex-col w-10/12 bg-gray-900 p-4 rounded-md shadow-2xl my-4">
        <div className="w-full flex justify-between px-4 opacity-50 mb-2">
          <div>Title</div>
          <div>Category</div>
          <div>Status</div>
        </div>
        {todos.map((todo, idx) => (
          <div
            key={todo.id}
            className={`${todos.length - 1 === idx ? 'rounded-b-md' : ''} ${
              idx === 0 ? 'rounded-t-md ' : ''
            } bg-gray-800 hover:bg-gray-700 cursor-pointer flex w-full justify-between p-4`}
          >
            <div>{todo.title}</div>
            <div>{todo.category}</div>
            <div>{todo.completed ? 'Completed' : 'Not Completed'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
