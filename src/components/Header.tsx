import { Menu } from "lucide-react";
import { SheetTrigger, SheetContent, Sheet } from "./ui/sheet";

export const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="rounded-full p-1 hover:bg-slate-50 focus-visible:bg-slate-50" />
        </SheetTrigger>
        <SheetContent side={"left"}></SheetContent>
      </Sheet>
    </header>
  );
};
