import { categories } from "@/data/category";
import Category from "../category/category.component";

export default function Categories() {
  return (
    <div className="bg-gray-100 dark:bg-zinc-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-indigo-900 dark:text-indigo-700">
          Our Categories
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {categories.map((category) => (
            <div className="group relative" key={category.id}>
              <Category category_data={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
