import React, { useEffect } from "react";
import { useRouter } from "next/router";
import io from "socket.io-client";

const PlayerIndex = () => {
  const route = useRouter();
  const { userID } = route.query;
  useEffect(() => {
    fetch("/api/battle").finally(() => {
      const socket = io();

      const sessionID = localStorage.getItem("sessionID");

      if (sessionID) {
        socket.auth = { sessionID };
        socket.connect();
      } else {
        socket.on("session", ({ sessionID, userID }) => {
          // attach the session ID to the next reconnection attempts
          socket.auth = { sessionID };
          // store it in the localStorage
          localStorage.setItem("sessionID", sessionID);
          // save the ID of the user
          socket.userID = userID;
        });
      }
      console.log(socket);
    });
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      {route.query?.gameMode === "competition" && (
        <>
          <div className="text-5xl font-bold animate-pulse">
            正在尋找對手...
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerIndex;
