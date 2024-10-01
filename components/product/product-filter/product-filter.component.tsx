import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
function FilterButton({ label, items }: { label: string; items: string[] }) {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-slate-200 text-zinc-900 dark:bg-black dark:text-white">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item, index) => (
          <SelectItem key={index} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default function ProductFilter() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-2">
      <div className="text-center mb-12">
        <h1 className="text-4xl text-indigo-500 dark:text-indigo-400 md:text-5xl font-bold mb-4">
          New Arrivals
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Thoughtfully designed objects for the workspace, home, and travel.
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-between items-center gap-4">
        <div className="w-full flex justify-between md:w-auto">
          <FilterButton
            label="Sort"
            items={["Highest to lowest", "Lowest to highest"]}
          />
          <div className="flex lg:hidden md:hidden">
            <Sheet>
              <SheetTrigger>
                <Filter />
                Filter
              </SheetTrigger>
              <SheetContent className="bg-black">
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>Filter</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center place-content-center gap-4">
                    <FilterButton
                      label="Category"
                      items={["T-Shirt", "Hoodie'24", "Joggers", "Sweatshirt"]}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <FilterButton
                      label="Sizes"
                      items={["S", "M", "L", "XL", "XXL"]}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <FilterButton
                      label="Color"
                      items={[
                        "Red",
                        "Blue",
                        "Green",
                        "Yellow",
                        "Black",
                        "White",
                      ]}
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="hidden md:flex lg:flex flex-wrap gap-4 justify-center md:justify-end">
          <FilterButton
            label="Category"
            items={["T-Shirt", "Hoodie'24", "Joggers", "Sweatshirt"]}
          />
          <FilterButton
            label="Color"
            items={["Red", "Blue", "Green", "Yellow", "Black", "White"]}
          />
          <FilterButton label="Sizes" items={["S", "M", "L", "XL", "XXL"]} />
        </div>
      </div>
    </section>
  );
}
