import { useState, useEffect } from "react";

const Example = (props) => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  //   const [a, b] = useState()

  useEffect(() => {
    console.log("useEffect ");
    getUsers();
  }, [text, props.num]);

  useEffect(() => {}, []);

  const getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      //   this.setState({ users: data });
      //   this.users = data;
      //   console.log("this.users=>", this.users);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const filtered = users.filter((item) => {
    return item.name.toLowerCase().includes(text.toLowerCase());
  });

  return (
    <>
      <h2>{props.num}. Example of Function Component </h2>
      <button onClick={() => getUsers()}>Get Users</button>
      <div>
        <input onChange={(e) => handleChange(e)} placeholder='Search...' />
      </div>
      {filtered.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </>
  );
};
export default Example;

/**
 * Hooks -> functions
 */
