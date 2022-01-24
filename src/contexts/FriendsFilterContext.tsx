import React, { createContext, useState } from "react";

interface IFriendFilterContextProps {
  filter: string;
  setFilter: React.Dispatch<string>;
}

export const FriendFilterContext = createContext(
  {} as IFriendFilterContextProps
);

export const FriendFilterProvider: React.FC = ({ children }) => {
  const [filter, setFilter] = useState("all");

  return (
    <FriendFilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FriendFilterContext.Provider>
  );
};
