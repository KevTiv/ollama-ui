"use client";
import React from "react";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { CornerDownLeft } from "lucide-react";
import UserActionModal from "~/components/UserActionModal";
import { cn } from "~/lib/utils";

function UserInputs() {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(true);
  const handleInputChange = () => {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.scrollTop = textarea.scrollHeight;
    }
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  // Adjust the textarea on mount in case it has initial content
  React.useEffect(() => {
    handleInputChange();
  }, []);

  return (
    <div
      className={cn([
        "container flex min-h-[15vh] w-full items-center justify-between gap-4 px-4 py-2",
      ])}
    >
      <UserActionModal />
      <div className={"relative w-full"}>
        <Textarea
          ref={inputRef}
          maxLength={400}
          className={cn([
            " w-full  transition-[height] duration-100 ease-in",
            isFocused
              ? "absolute bottom-0 max-h-[600px] translate-y-10 bg-white"
              : "static max-h-[50px] resize-y bg-white/80",
          ])}
          placeholder={"Type your question here..."}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <Button className={"h-14 w-14"}>
        <CornerDownLeft />
      </Button>
    </div>
  );
}

export default UserInputs;
