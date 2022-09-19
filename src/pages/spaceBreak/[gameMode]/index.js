import React, { useEffect } from "react";
import { useRouter } from "next/router";
import io from "socket.io-client";

const Index = () => {
  const route = useRouter();

  function toCompetition(playerID) {
    route.push(
      "/spaceBreak/[gameMode]/[player]",
      `/spaceBreak/competition/${playerID}`
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-y-6 items-center justify-center">
      {route.query?.gameMode === "competition" && (
        <>
          <button
            onClick={() => {
              toCompetition("player1");
            }}
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            PLAYER 1
          </button>

          <button
            onClick={() => {
              toCompetition("player2");
            }}
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            PLAYER 2
          </button>
        </>
      )}
    </div>
  );
};

export default Index;
