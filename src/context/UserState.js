import { UserContext } from "./Context";
import { useState } from "react";

const UserState = (props) => {
  const [user, setUser] = useState(null);
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
