"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { cn } from "~/lib/utils";

type Chat = {
  id: string | number;
  title: string;
  description: string[] | string;
  created_at: string;
};
const _MOCK_HISTORY = new Array<Chat>(35).fill({
  id: 1,
  title: "title",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
  created_at: "2020-01-01T00:0",
});

function ChatHistory() {
  const userHistory = _MOCK_HISTORY;
  const [selectedContext, setSelectedContext] = React.useState<number[]>([]);
  const isMinifyUsed = React.useMemo(
    () => selectedContext.length === 0,
    [selectedContext],
  );

  const updateSelectedContext = (id: number) => {
    if (selectedContext.includes(id)) {
      setSelectedContext(selectedContext.filter((i) => i !== id));
    } else {
      setSelectedContext([...selectedContext, id]);
    }
  };
  return (
    <div
      className={cn(
        [
          "container flex h-[100vh] w-0 flex-col overflow-hidden pb-8 transition-all delay-100 duration-200 ease-out",
        ],
        [isMinifyUsed ? "xl:w-1/5 xl:hover:w-1/3" : "xl:w-1/3"],
      )}
    >
      <div className={"flex items-center justify-center gap-4 py-14"}>
        <h2 className={"text-center text-2xl font-semibold"}>Chat History </h2>
        <MessageCircle className={"dark:text-white"} />
      </div>
      <div
        className={cn(
          ["overflow-scroll"],
          [isMinifyUsed ? "opacity-0 hover:opacity-100" : "opacity-100"],
        )}
      >
        {userHistory.map((item, index) => (
          <Card
            key={index}
            className={cn(
              [
                "my-1 border-transparent hover:bg-accent-foreground hover:text-white",
              ],
              selectedContext.includes(index)
                ? "bg-accent-foreground text-white"
                : "bg-white/90",
            )}
            onClick={() => updateSelectedContext(index)}
          >
            <CardHeader className="flex min-h-[8rem] w-full flex-row items-center justify-between ">
              <h3 className="truncate">{item.title}</h3>
              <h3>{item.created_at}</h3>
            </CardHeader>
            <CardContent className="truncate">{item.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ChatHistory;
