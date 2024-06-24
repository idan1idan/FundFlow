import { Header } from "@/components/Header";
import { Avatar, AvatarFallback } from "./components/ui/avatar";
function App() {
  return (
    <>
      <Header />
      <main className="container flex flex-col">
        <div className="flex flex-col items-center justify-center gap-4 py-4">
          <Avatar>
            <AvatarFallback>IG</AvatarFallback>
          </Avatar>
          Hello Idan Gigi
        </div>
      </main>
    </>
  );
}

export default App;
