import React from "react";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import ChatHistory from "~/components/ChatHistory";
import UserInputs from "~/components/UserInputs";
import LlmSelect from "~/components/LLMSelect";
import ConversationCanvas from "~/components/ConversationCanvas";
import SearchInput from "~/components/Search";
import SortByDate from "~/components/SortByDate";
import { Settings } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  // if(!session){
  //   redirect("/login");
  // }

  return (
    //   bg-gradient-to-b from-[#2e026d] to-[#15162c]
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden px-2">
      <div className="container flex w-screen flex-1 overflow-hidden pr-8">
        <ChatHistory />
        <div
          className={
            "container flex w-full flex-col items-center justify-between pt-6"
          }
        >
          <div
            className={
              "container flex max-h-[85vh] w-full  flex-col gap-6 overflow-hidden p-2"
            }
          >
            <div
              className={"flex w-full items-center justify-between py-2 pl-2"}
            >
              <LlmSelect />
              <div className={"flex gap-4"}>
                <SortByDate />
                <SearchInput />
                <Link
                  href={"/settings"}
                  className={"flex items-center justify-center"}
                >
                  <Settings className={"dark:text-white"} />
                </Link>
              </div>
            </div>
            <ConversationCanvas />
          </div>
          <UserInputs />
        </div>
      </div>
    </main>
  );
}
