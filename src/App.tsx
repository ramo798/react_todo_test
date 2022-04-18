import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {TestComp} from './components/test'

interface Todo{
  title : string,
  text: string,
  done: boolean,
}


function App() {
  const [count, setCount] = useState(0)
  const [articles, setArticle] = useState([1, 2, 3])
  const [tTitle, settTitle] = useState("")
  const [tText, settText] = useState("")
  const [tDone, settDone] = useState(false)


  const addArticle = (tmp:number)=>{
    setArticle([...articles,tmp])
  }

  const testtodo : Todo = {
    title:"jcapsjoc",
    text:"あいうえおいうｈｗぢｌｖ",
    done:false
  }
  const [todolist,setTodoList] = useState<Todo[]>([testtodo])

  const addTodo = () => {
    const ntodo:Todo = {
      title:tTitle,
      text:tText,
      done:false,
    }
    setTodoList([...todolist,ntodo])
  }

  // setTodoList([...todolist,testtodo])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-4xl'>Hello Vite + Rexasxact!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <TestComp />
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <ul>
          {articles?.map((value) => {
            return (
              <li>{value?.toString()}</li>
            )
          })}
        </ul>
        <button type="button" onClick={() => addArticle(7)}>
            push 7
        </button>
        <div>
          {todolist?.map((value) => {
            return (
              <div>
                <p>{JSON.stringify(value)}</p>
                <p>タイトル：{value.title}</p>
                <p>内容：{value.text}</p>
                <p>終了：{value.done.toString()}</p>
              </div>
            )
          })}
        </div>
        <div>
          <div>
            <p className="font-bold text-5xl">タイトル</p>
            <input value={tTitle} onChange={(event) => settTitle(event.target.value)} />
            <p>内容</p>
            <input value={tText} onChange={(event) => settText(event.target.value)} />
          </div>
          <div>
            <p>{tTitle}</p>
            <p>{tText}</p>
          </div>
          <button type="button" onClick={() => addTodo()}>
            ADD
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
