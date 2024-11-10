"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import getunreadMessageCount from "@/app/actions/getunreadMessageCount";

const GlobalContext = createContext();

// Create Provider
export const GlobalProvider = ({ children }) => {
  const [unreadCount, setUnreadCount] = useState(0);

  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      getunreadMessageCount()
        .then((res) => {
          if (res.count) setUnreadCount(res.count);
        })
        .catch((error) => console.error(error));
    }
  }, [getunreadMessageCount, session]);

  return (
    <GlobalContext.Provider value={{ unreadCount, setUnreadCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
