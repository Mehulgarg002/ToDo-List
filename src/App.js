import "./App.css";
import Header from "./mycomponents/Header";
import Todos from "./mycomponents/Todos";
import Footer from "./mycomponents/Footer";
import AddTodo from "./mycomponents/AddTodo";
import About from "./mycomponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let initTodo = [];
  const [todos, setTodos] = useState(initTodo);
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno = null;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
      console.log('sno', sno)
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route exact path="/" element={
            <React.Fragment>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </React.Fragment>
          }/>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}


export default App;
{/* <Route exact path="/">
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          </Route> */}

