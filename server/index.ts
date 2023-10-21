import { createServer } from "http";
import url from "url";
import { WebSocketServer } from "ws";

const PORT = Number(process.env.PORT) || 3030;

const server = createServer();
// general websocket for all chat
const gws = new WebSocketServer({ noServer: true });

gws.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("upgrade", (e) => {
    //TODO
    // display user as ONLINE
    console.log(e);
  });
});

server.on("upgrade", function upgrade(request, socket, head) {
  // figure out what to replace parse with
  const { pathname } = url.parse(request.url ?? "");

  if (pathname === "/foo") {
    gws.handleUpgrade(request, socket, head, function done(ws) {
      ws.emit("connection", ws, request);
    });
  } else {
    socket.destroy();
  }
});

server.listen(PORT);
