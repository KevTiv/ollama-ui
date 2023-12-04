import React from "react";
import { Input } from "~/components/ui/input";
import { Search } from "lucide-react";
function SearchInput() {
  return (
    <div className={"flex items-center justify-center gap-2"}>
      <Search className={"dark:text-white"} />
      <Input className={"bg-white/80"} type="text" placeholder="Search" />
    </div>
  );
}

export default SearchInput;
