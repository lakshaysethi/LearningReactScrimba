const todosData = [
  {
    id: 1,
    text: "Take out the trash",
    completed: true
  },
  {
    id: 2,
    text: "Grocery shopping",
    completed: false
  },
  {
    id: 3,
    text: "Clean gecko tank",
    completed: false
  },
  {
    id: 4,
    text: "Mow lawn",
    completed: true
  },
  {
    id: 5,
    text: "Catch up on Arrested Development",
    completed: false
  }
];

function TodoItem(props) {
  return (
    <div id="todo-item" className="todo-item">
      <input type="checkbox" checked={props.item.completed} />
      <p>{props.item.text}</p>
    </div>
  );
}

function App() {
  const todoItems = todosData.map(item => {
    return <TodoItem key={item.id} item={item} />;
  });

  return <div className="todo-list">{todoItems}</div>;
}

ReactDOM.render(<App />, document.getElementById("#root"));
// $("#root div ul li .to-do")
