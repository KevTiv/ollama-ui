import React from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "~/components/ui/select";

function LlmSelect() {
  const models = ["mistral"];
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-white/80">
        <SelectValue placeholder={models[0]} />
      </SelectTrigger>
      <SelectContent>
        {models.map((model) => (
          <SelectItem className={"text-xl"} key={model} value={model}>
            {model}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default LlmSelect;
