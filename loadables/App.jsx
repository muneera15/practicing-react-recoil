import './App.css'
import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
   if( todo.state === 'loading'){
    return <>
            loading
        </>
   }
  return (
    <>
      {todo.contents.title}
      {todo.contents.description}
    </>
  )
}

export default App
