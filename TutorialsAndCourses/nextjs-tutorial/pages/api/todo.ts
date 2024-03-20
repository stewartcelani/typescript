import { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from '@/types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getTodos(req, res);
    default:
      res.status(405).end();
      break;
  }
}

function getTodos(req: NextApiRequest, res: NextApiResponse) {
  try {
    const todos: Todo[] = [
      {
        id: '1',
        title: 'Workout',
        category: 'Fitness',
        completed: false
      },
      {
        id: '2',
        title: 'Do taxes',
        category: 'Finance',
        completed: true
      },
      {
        id: '3',
        title: 'Walk the dog',
        category: 'Family',
        completed: false
      }
    ];

    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}
