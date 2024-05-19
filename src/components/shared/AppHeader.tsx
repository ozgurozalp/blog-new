import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 lg:py-0 lg:relative">
      <div className="container flex justify-between items-center relative z-50 w-full h-16 bg-[#f5f5f5f2]">
        <Link className="block text-2xl font-semibold" href="/">
          Özgür ÖZALP
        </Link>
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
