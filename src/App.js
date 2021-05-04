import React, { useState, useEffect } from "react";
import { db } from "./firebase";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsub = db.collection("todos").onSnapshot((snap) => {
      setTodos(
        snap.docs.map((doc) => {
          const id = doc.id;
          const data = doc.data();
          return { id, ...data };
        })
      );
    });

    return () => unsub();
  }, []);

  console.log("todos", todos);

  return <div>Hello World</div>;
}
