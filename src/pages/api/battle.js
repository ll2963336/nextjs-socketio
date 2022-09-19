import { Server } from "socket.io";

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    console.log("*First use, starting socket.io");

    const io = new Server(res.socket.server);

    io.use((socket, next) => {
      const sessionID = socket.handshake.auth.sessionID;

      if (sessionID) {
        // find existing session
        const session = sessionStore.findSession(sessionID);
        if (session) {
          socket.sessionID = sessionID;
          socket.userID = session.userID;
          socket.username = session.username;
          return next();
        }
      }
      const username = socket.handshake.auth.username;
      if (!username) {
        return next(new Error("invalid username"));
      }
      // create new session
      socket.sessionID = randomId();
      socket.userID = randomId();
      socket.username = username;
      next();
    });

    io.on("connection", (socket) => {
      socket.emit("session", {
        sessionID: socket.sessionID,
        userID: socket.userID,
      });

      socket.broadcast.emit(`${socket.userID || "a user"} connected`);
      socket.on("hello", (msg) => {
        socket.emit("hello", "world!");
      });
    });

    res.socket.server.io = io;
  } else {
    console.log("socket.io already running");
  }
  res.end();
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default ioHandler;
