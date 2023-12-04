"use client";
import React from "react";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { CornerDownLeft } from "lucide-react";
import UserActionModal from "~/components/UserActionModal";

function UserInputs() {
  return (
    <>
      <UserActionModal />
      <Textarea
        className={"bg-white/80"}
        placeholder={"Type your question here..."}
      />
      <Button className={"h-16 w-16"}>
        <CornerDownLeft />
      </Button>
    </>
  );
}

export default UserInputs;
