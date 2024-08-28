<script lang="ts">
  import Markdown from "../components/Markdown.svelte";
  import PaddingPane from "../components/PaddingPane.svelte";
  const md = `\
## \`createRawSnippet\` の使い方

\`\`\`js
{#snippet link(href, content)}
  <a {href} onfocus={console.log}>{content}</a>
{/snippet}
\`\`\`

\`\`\`js
const link = createRawSnippet((href, content) => ({
  render: () => \`<a href="\${href()}">\${content()}</a>\`,
  setup: (a) => { // ↓自分でもろもろ登録する必要がある
    $effect(() => a.href = href());
    $effect(() => a.textContent = content());
    a.addEventListener('focus', console.log);
    return () => a.removeEventListener('focus', console.log);
  },
}));
\`\`\`
`;
</script>

<PaddingPane>
  <Markdown {md} />
</PaddingPane>
