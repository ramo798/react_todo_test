import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoOb from './components/TodoOb'
import {ITodo} from './model/ITodo'

function App() {
  const [tTitle, settTitle] = useState("")
  const [tText, settText] = useState("")

  const inputKun = useState<ITodo>()

  const testtodo : ITodo = {
    title:"test todo",
    text:"あいうえおあお",
  }
  const [todolist,setTodoList] = useState<ITodo[]>([testtodo])

  const addTodo = () => {
    if (tTitle != "" && tText != ""){
      console.log(87);
      const ntodo:ITodo = {
        title:tTitle,
        text:tText,
      }
      settTitle("")
      settText("")
      setTodoList([...todolist,ntodo])
    }
  }
  return (
    <div className='w-full flex justify-center flex-col items-center mt-4' >
      <div className='w-full max-w-xs'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' >
          <div className='mb-4' >
            <label className="block text-gray-700 text-sm font-bold mb-2">
              タイトル
            </label>
            <input type="text" value={tTitle} onChange={event => settTitle(event.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ></input>
          </div>
          <div className='mb-6' >
            <label className="block text-gray-700 text-sm font-bold mb-2">
              内容
            </label>
            <input type="text"  value={tText} onChange={event => settText(event.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ></input>
          </div>
          <div className='flex justify-end' >
            <button type="button" onClick={addTodo} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline' >追加</button>
          </div>
        </div>
      </div>

      <div className='w-full max-w-xs'>
        {todolist.map((value) => {
          return (
          <div className='w-full'>
            <TodoOb todovalue={value}></TodoOb>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
