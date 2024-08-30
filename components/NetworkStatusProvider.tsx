"use client";

import { ReactNode, useEffect, useState } from "react";

type Props = { children: ReactNode };

export default function NetworkStatusProvider({ children }: Props) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);
  return isOnline ? children : <p>loading</p>;
}
