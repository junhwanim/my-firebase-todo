import { Box, Button, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import TodoCardDialog from "./TodoCardDialog";

import { db } from "./firebase";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [currentTodo, setCurrentTodo] = React.useState(null);

  useEffect(() => {
    const unsub = db.collection("todos").onSnapshot((snap) => {
      setTodos(
        snap.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });

    return () => unsub();
  }, []);

  const handleCloseDialog = (todo) => {
    setCurrentTodo(null);

    if (!todo) {
      return;
    }

    const { id, subject, body } = todo;
    db.collection("todos").doc(id).set({ subject, body });
  };

  const handleEdit = (todo) => {
    setCurrentTodo(todo);
  };

  const handleDelete = (id) => {
    db.collection("todos").doc(id).delete();
  };
  return (
    <Container fixed>
      <TodoCardDialog
        isDialogOpen={!!currentTodo}
        currentTodo={currentTodo}
        handleCloseDialog={handleCloseDialog}
      />
      <div className="todos-container">
        {todos.map((todo) => {
          return (
            <TodoCard
              key={`todo-${todo.id}`}
              subject={todo.subject}
              body={todo.body}
              handleEdit={() => handleEdit(todo)}
              handleDelete={() => handleDelete(todo.id)}
            ></TodoCard>
          );
        })}
      </div>
      <Box paddingTop="3rem" paddingBottom="1rem" textAlign="center">
        <Button variant="outlined" onClick={() => setCurrentTodo({})}>
          New TODO
        </Button>
      </Box>
    </Container>
  );
}
