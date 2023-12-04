// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`, // mdx 파일경로 패턴

  // mdx로 작성한 글 정보에 대해 입력해야하는 필드 정의
  /*
      [필드명]: {
        type: '자료형',
        required: '필수여부',
      }
    */
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: false,
    },
    category: {
      type: 'string',
      required: false,
    },
    series: {
      type: 'string',
      required: false,
    },
    thumbnail: {
      type: 'string',
      required: false,
    },
    createdAt: {
      type: 'date',
      required: true,
    },
  },
}))

const contentSource = makeSource({
  // 마크다운 파일이 저장되어 있는 루트 폴더
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeCodeTitles,
      // rehypePrism,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'rose-pine-moon',
            // light: 'rose-pine-dawn',
          },
        },
      ],
    ],
  },
})

export default contentSource
