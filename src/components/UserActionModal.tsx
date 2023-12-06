"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { CardContent, CardTitle } from "~/components/ui/card";
import { PlusCircle, XCircle } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Files, Globe, FileImage, FolderUp } from "lucide-react";

function UserActionModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className={"h-14 w-14"} onClick={() => console.log("hello")}>
          <PlusCircle />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={"DialogOverlay"} />
        <Dialog.Content className="showModal fixed left-1/2 top-1/2 flex max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-sm bg-white py-2 shadow">
          <div className={"my-12"}>
            <CardTitle
              className={"flex items-center gap-3 px-6 py-4 underline"}
            >
              <FolderUp />
              Upload content
            </CardTitle>
            <CardContent className={"flex gap-3"}>
              <Button>
                <Files />
              </Button>
              <Button>
                <FileImage />
              </Button>
              <Button>
                <Globe />
              </Button>
            </CardContent>
          </div>
          <Dialog.Close asChild>
            <Button className="IconButton" aria-label="Close">
              <XCircle />
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default UserActionModal;
