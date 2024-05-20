"use client";
import Link from "next/link";
import { CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import AppLogo from "@/components/shared/AppLogo";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

export default function AppHeader() {
  const [open, setOpen] = useState(false);
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();
  const { width } = useWindowSize();

  useEffect(() => {
    onClick(false);
  }, [width]);

  /*
  const blogs = allBlogs.all();

  const categoriesOnlyHasOneBlog = CATEGORIES.filter((category) => {
    return (
      blogs.filter((blog) =>
        blog.frontMatter.categories.includes(category.slug),
      ).length === 1
    );
  });
   */

  const path01Variants = {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 9.5L24 9.5" },
  };

  const path02Variants = {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    moving: { d: "M0 14.5L24 14.5" },
    closed: { d: "M0 14.5L15 14.5" },
  };

  async function onClick(open: boolean) {
    setOpen(open);
    if (open) {
      await path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path02Controls.start(path02Variants.open);
    } else {
      path01Controls.start(path01Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
    }
  }

  function MobileMenu() {
    return (
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-background/95 fixed border-t-2 left-0 right-0 z-50 top-[--header-height] h-[--body-height] mobile-menu-open"
          >
            <nav>
              {CATEGORIES.map((category, index) => (
                <Link
                  onClick={() => onClick(false)}
                  className={cn(
                    "align-center block font-medium border-b-2 border-dashed px-4 py-4 md:px-[34px] text-[22px]",
                  )}
                  key={category.slug}
                  href={`/category/${category.slug}`}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 lg:py-0 lg:relative h-[--header-height] bg-background/95",
      )}
    >
      <MobileMenu />
      <div className="container flex [&>*]:shrink-0 justify-between items-center relative z-50 w-full max-h-full">
        <Link className="block text-2xl font-semibold" href="/">
          <AppLogo className="size-36" />
        </Link>
        <nav className="rounded-4xl hidden lg:flex [&>*]:shrink-0 items-center p-1 text-lg h-14 leading-[22px] border-2 bg-white border-[--brand]">
          {CATEGORIES.map((category, index) => (
            <Link
              className={cn(
                "px-7 h-full flex items-center -mx-2 hover:bg-[--brand] hover:text-white transition-all rounded-full",
                index === 0 && "!ml-0",
                index === CATEGORIES.length - 1 && "!mr-0",
              )}
              key={category.slug}
              href={`/category/${category.slug}`}
            >
              {category.name}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => onClick(!open)}
          className="-m-2 p-2 hover:cursor-pointer flex lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <motion.path
              {...path01Variants.closed}
              animate={path01Controls}
              transition={{ duration: 0.2 }}
              stroke="currentColor"
              strokeWidth={3}
            />
            <motion.path
              {...path02Variants.closed}
              animate={path02Controls}
              transition={{ duration: 0.2 }}
              stroke="currentColor"
              strokeWidth={3}
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
