import Link from "next/link";
import { CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 lg:py-0 lg:relative">
      <div className="container flex justify-between items-center relative z-50 w-full h-16 lg:h-[80px] bg-[#f5f5f5f2]">
        <Link className="block text-2xl font-semibold" href="/">
          Özgür ÖZALP
        </Link>
        <nav className="rounded-4xl hidden lg:flex items-center p-1 text-lg h-14 leading-[22px] border-2 bg-white border-[--brand]">
          {CATEGORIES.map((category, index) => (
            <Link
              className={cn(
                "px-7 h-full flex items-center -mx-2 hover:bg-[--brand] hover:text-white transition-all rounded-full",
                index === 0 && "!ml-0",
                index === CATEGORIES.length - 1 && "!mr-0",
              )}
              key={category.slug}
              href={`category/${category.slug}`}
            >
              {category.name}
            </Link>
          ))}
        </nav>
        <button className="-m-2 p-2 hover:cursor-pointer flex lg:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18H21"
              stroke="#131212"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M3 12H21"
              stroke="#131212"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M3 6H21"
              stroke="#131212"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
