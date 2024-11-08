"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useRouter } from "next/navigation"; // Import the useRouter hook

interface CommandMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
  const router = useRouter(); // Initialize the router

  const handleNavigateToBrands = () => {
    setOpen(false); // Close the dialog
    router.push("/brands"); // Navigate to /brands
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem className="cursor-pointer" onSelect={handleNavigateToBrands}>Brands</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
