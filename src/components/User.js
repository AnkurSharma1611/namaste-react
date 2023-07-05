import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <h2>Name:{name}</h2>
      <h3>Location: Bareilly</h3>
      <h4>Contact: @ankursharma</h4>
    </div>
  );
};
export default User;
