import data from "../db.json";
import DisplayTodo from "./Displaytodo";

function Tasklist({load}) {
  if(load){
    return<h2>Loading....</h2>
  }
  return (
    <>
      {data.todos.map((e) => {
        return (
          <DisplayTodo
            key={e.id}
            id={e.id}
            title={e.title}
            status={e.author}
          />
        );
      })}
    </>
  );
}
export default Tasklist;