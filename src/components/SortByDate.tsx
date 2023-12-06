"use client";

import React from "react";
import { Calendar } from "~/components/ui/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "~/lib/utils";

function SortByDate() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild className={"bg-white/80"}>
        <Button
          variant={"outline"}
          className={cn(
            "w-1/8 flex items-center justify-center text-left font-normal lg:w-full",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 translate-x-1/4" />
          <span className={"hidden w-0 lg:flex lg:w-full"}>
            {date ? format(date, "PPP") : "Pick a date"}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default SortByDate;
