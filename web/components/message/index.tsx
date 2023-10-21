"use client";
import { useState, useEffect } from "react";

export default function Message() {
  const [text, setText] = useState("");
  const [socket, setSocket] = useState<null | WebSocket>(null);

  useEffect(() => {
    const ws = new WebSocket(process.env.WEBSOCKET_URL || "");

    if (ws) {
      ws.addEventListener("open", (e) => {
        console.log(e, "E");
        setSocket(ws);
      });
    }
  }, []);

  if (!socket) {
    return <p>loading...</p>;
  }

  return (
    <>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button disabled={text.length === 0}>Send Message</button>
    </>
  );
}
