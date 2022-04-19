import React, { FC } from 'react';
import {ITodo} from '../model/ITodo'

interface Props{
  todovalue : ITodo
}

// Functional Component と class Component  もあるけどこれなんですか、、、、、
const TodoOb = ({todovalue} : Props) => {
    return (
        <>
        <div className='w-full rounded overflow-hidden shadow-lg'>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>
              {todovalue.title}
            </div>
            <p className='text-gray-700 text-base'>
              {todovalue.text}
            </p>
            <div className='flex justify-end'>
              <button  className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border-red-700 rounded'>
                delete
              </button>
            </div>
          </div>
        </div>
        </>
    );
};

          // {JSON.stringify(todovalue)}
export default TodoOb