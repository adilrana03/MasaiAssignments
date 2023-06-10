// import "./DisplayTodo.css";
function DisplayTodo({ id, title, author }) {
  return (
    <div className="task-container">
      <div className="task-container-background">
        <div className="task-term-container">
          <p>{id}</p>
          <h2 className="task-term">{title}</h2>
          <p>{`${author}`}</p>
        </div>
      </div>

    </div>
  );
}
export default DisplayTodo;