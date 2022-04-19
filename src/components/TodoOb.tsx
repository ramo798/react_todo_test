import React, { FC } from 'react';
import {ITodo} from '../model/ITodo'

interface Props{
  todovalue : ITodo
}

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
          </div>
        </div>
        </>
    );
};

export default TodoOb