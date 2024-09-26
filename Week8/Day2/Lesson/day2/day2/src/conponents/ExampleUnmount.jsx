import { useEffect } from "react";

const ExampleUnmount = (props) => {
  useEffect(() => {


    return () => {
        alert("I will be gone soon :( ")
    };
  }, []);
  return (
    <>
      <h1>This is me!</h1>
    </>
  );
};
export default ExampleUnmount;
