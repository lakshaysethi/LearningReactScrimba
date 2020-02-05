"use strict";

var todosData = [
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
    completed: false
  },
  {
    id: 5,
    text: "Catch up on Arrested Development",
    completed: false
  }
];

function TodoItem(props) {
  return React.createElement(
    "div",
    {
      className: "todo-item"
    },
    React.createElement("input", {
      type: "checkbox",
      checked: props.item.completed
    }),
    React.createElement("p", null, props.item.text)
  );
}

function App() {
  var todoItems = todosData.map(function(item) {
    return React.createElement(TodoItem, {
      key: item.id,
      item: item
    });
  });
  return React.createElement(
    "div",
    {
      className: "todo-list"
    },
    todoItems
  );
}

ReactDOM.render(
  React.createElement(App, null),
  document.querySelector("#root")
);
