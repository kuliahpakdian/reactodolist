import { FaRegCircleXmark,FaCheck  } from "react-icons/fa6";


export default function TodoItem ({ todo, setRefresh }) {

    const updateTodo = () => {
      todo.done = !todo.done
  
      fetch("http://localhost:3000/todos/" + todo.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
      }).then(() => {
        console.log('todo updated.')
        setRefresh(true)
      })
    }
  
    const deleteTodo = () => {
      fetch("http://localhost:3000/todos/" + todo.id, {
        method: "DELETE",
      }).then(() => {
        console.log('todo deleted.')
        setRefresh(true);
      });
    };
  
    return (
        <>
      <li className={`${todo.done ? "checked" : ""}`}>
      {todo.done && <span className="checkicon"><FaCheck /></span>}
        <div onClick={updateTodo}>{todo.title}</div> 
        <span className="close" onClick={deleteTodo}><FaRegCircleXmark />
        </span>
      </li>
        </>
    );
  };
  