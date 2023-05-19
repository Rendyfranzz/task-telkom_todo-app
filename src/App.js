
import { useEffect, useState } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import Layout from './components/Layout';
import ListTodo from './components/ListTodo';
import ListTodoComplete from './components/ListTodoComplete';


function App() {

  const getTodo =()=>{
    let todo = JSON.parse(localStorage.getItem("todo") || "[]")
    if (todo){
      return todo
    }
    return []
  }
  const [todos, setTodos] = useState(getTodo())
  useEffect(() => {
   localStorage.setItem("todo",JSON.stringify(todos))
    
  }, [todos])

  // let todoComplete,ncompleteTodo
  // if(todos){
  //   todos.map((data)=>{
  //     data.filter()
  //   })
  // }
 
  
  return (
    <Layout>
      <div className='layout flex flex-col space-y-4 justify-center dark:bg-gray-800'>
        <AddForm todos={todos} setTodos={setTodos} />
        <ListTodo todos={todos} setTodos={setTodos}/>
        <ListTodoComplete todos={todos} setTodos={setTodos} />
      </div>
    </Layout>
  );
}

export default App;
