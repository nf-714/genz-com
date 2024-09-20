import { Input } from "../../ui/input";

export default function SearchBar() {
  return (
    <>
      <Input
        type="text"
        placeholder="Search for products..."
        className="text-md w-full rounded-l border bg-zinc-300 px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
    </>
  );
}
