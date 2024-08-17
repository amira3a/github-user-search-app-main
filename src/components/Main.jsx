import React, { useEffect, useState } from "react";

import Input from "./Input";
import Card from "./Card";

const Main = () => {
  const [user, setUser] = useState("amira3a");
  const [choice, setChoice] = useState("amira3a");
  const [error, setError] = useState("");

  const changeUser = (newUser) => {
    setChoice(newUser);
  };

  const fetchUserHandler = async () => {
    setError("");

    
      const response = await fetch(`https://api.github.com/users/${choice}`);

      

      const newUser = await response.json();

      setUser(newUser);
    } 
  

  useEffect(() => {
    fetchUserHandler();
  }, [fetchUserHandler]);

  return (
    <main>
      <Input changeUser={changeUser} error={error} />
      <Card user={user} />
    </main>
  );
};
export default Main;
