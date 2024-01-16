import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./src/docs",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    // @ts-expect-error: Unreachable code error
    rehypePlugins: [highlight],
  },
});
