import { todoAtomFamily } from "./atom";
import { RecoilRoot , useRecoilState, useRecoilState } from "recoil";
function App(){
    return <>
    <RecoilRoot>
    <Todo id = {1}/>
    <Todo id = {2}/>
    </RecoilRoot>
    </>
}
function Todo({id}){
const [todo, setTodo] = useRecoilState(todoAtomFamily(id));
return (
    <div>
        {todo.title}
        {todo.description}
    </div>
)
}