<script lang="ts">
  import type { Plugin } from "svelte-exmarkdown";
  import Markdown from "svelte-exmarkdown";
  import type { LanguageFn } from "highlight.js";
  import css from "highlight.js/lib/languages/css";
  import javascript from "highlight.js/lib/languages/javascript";
  import typescript from "highlight.js/lib/languages/typescript";
  import xml from "highlight.js/lib/languages/xml";
  import "highlight.js/styles/atom-one-dark-reasonable.css";
  import rehypeHighlight from "rehype-highlight";
  type Props = { md: string };
  let { md }: Props = $props();

  const highlightPlugin: Plugin = {
    rehypePlugin: [
      rehypeHighlight,
      {
        ignoreMissing: true,
        languages: {
          xml,
          css,
          javascript,
          typescript,
          svelte: ((hljs) => {
            const javascript = {
              begin: /^(\s*)(<script(\s+context="module")?\s*>)/gm,
              end: /^(\s*)(<\/script>)/gm,
              subLanguage: "javascript",
              excludeBegin: true,
              excludeEnd: true,
              contains: [
                {
                  begin: /^(\s*)(\$:)/gm,
                  end: /(\s*)/gm,
                  className: "keyword",
                },
              ],
            };
            return {
              name: "svelte",
              subLanguage: "xml",
              contains: [
                hljs.COMMENT("<!--", "-->", { relevance: 10 }),
                javascript,
                {
                  ...javascript,
                  begin:
                    /^(\s*)(<script(\s+context="module")?\s+lang="ts"(\s+context="module")?\s*>)/gm,
                  subLanguage: "typescript",
                },
                {
                  begin: /^(\s*)(<style(\s.*)*>)/gm,
                  end: /^(\s*)(<\/style>)/gm,
                  subLanguage: "css",
                  excludeBegin: true,
                  excludeEnd: true,
                },
                {
                  begin: /\{/gm,
                  end: /\}/gm,
                  subLanguage: "javascript",
                  contains: [
                    { begin: /\{/, end: /\}/, skip: true },
                    {
                      begin:
                        /([#:/@])(if|else|each|await|then|catch|debug|html)/gm,
                      className: "keyword",
                      relevance: 10,
                    },
                  ],
                },
              ],
            };
          }) satisfies LanguageFn,
        },
      },
    ],
  };
  const plugins = [highlightPlugin];
</script>

<Markdown {md} {plugins} />
