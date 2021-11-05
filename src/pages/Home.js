import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Nav from "../components/Nav";
import TasksList from "../components/TasksList/TasksList";

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Form />
      <TasksList />
    </div>
  );
};

export default Home;
