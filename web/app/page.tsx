if (!process.env.WEBSOCKET_URL) {
  throw new Error("Websocket URL not set");
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
