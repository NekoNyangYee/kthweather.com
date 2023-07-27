import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";

const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.md`,
    contentType: "mdx",
    fields: {
        category: { type: "string", required: true },
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        description: { type: "string", required: true },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `/${doc._raw.flattenedPath}`,
        },
    },
}))

const contentSource = makeSource({
    contentDirPath: "posts",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [
            [
                rehypePrettyCode,
                {
                    theme: "github-dark"
                },
            ],
            highlight,
        ],
    },
});

export default contentSource;