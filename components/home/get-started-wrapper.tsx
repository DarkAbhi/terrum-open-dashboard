"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CommandMenu } from "@/components/home/get-started-command-menu";

export function CommandMenuWrapper() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prevOpen) => !prevOpen);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="flex justify-center mt-5">
        <Button
          className="bg-blue-500 hover:bg-blue-600 dark:bg-purple-700 dark:hover:bg-purple-800"
          onClick={() => {setOpen(true)}}
        >
          Get Started
        </Button>
      </div>
      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
}
