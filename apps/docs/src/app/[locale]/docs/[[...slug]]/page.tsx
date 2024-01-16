import { notFound } from "next/navigation";
import { allDocs } from "contentlayer/generated";
import { Menu } from "@/components/menu";
import { MdxComponent } from "@/components/mdx-components";

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
    slug: doc._raw.flattenedPath.split("/"),
  }));
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  // Find the post for the current page.
  const slug = params.slug?.join("/") || "";
  // console.log(slug);
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === slug);

  // 404 if the post does not exist.
  if (!doc) notFound();

  return (
    <div className="flex">
      <Menu />
      <div className="flex-1">
        <MdxComponent code={doc.body.code} />
      </div>
    </div>
  );
}
