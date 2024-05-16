import { notFound } from "next/navigation";
import { allBlogs } from "@/content";

type Props = { params: { slug: string } };

export default async function Page({ params }: Props) {
  const doc = await allBlogs.get(params.slug);

  if (!doc) {
    return notFound();
  }

  const { Content, frontMatter } = doc;

  const Document = Content as JSX.ElementType;

  return (
    <div className="container py-4">
      <article className="prose mx-auto max-w-2xl">
        <div className="not-prose"></div>
        <Document />
      </article>
    </div>
  );
}
