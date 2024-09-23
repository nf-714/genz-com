import { ICategory } from "@/types/types";

export default function Category({
  category_data,
}: {
  category_data: ICategory;
}) {
  const { title, category, image } = category_data;
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={image}
          alt="Front of men's Basic Tee in black."
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-500 dark:text-gray-300">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0 " />
              {category}
            </a>
          </h3>
          <p className="mt-1 text-l font-bold text-indigo-900  dark:text-indigo-600">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
