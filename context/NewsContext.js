import { createContext, useContext, useEffect, useState } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [notWatched, setNotWatched] = useState([]);

  console.log(notWatched[0] === "");

  const badgeNumber = notWatched[0] === "" ? 0 : notWatched.length;
  console.log(badgeNumber);

  return (
    <NewsContext.Provider value={{ notWatched, setNotWatched, badgeNumber }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNotWatched = () => useContext(NewsContext);
