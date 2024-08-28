<script lang="ts">
  import Markdown from "../components/Markdown.svelte";
  import PaddingPane from "../components/PaddingPane.svelte";
  const md = `\
## Snippetをおさらい

\`<slot />\`を置き換える、Svelte 5で登場予定の概念。  
コンポーネント内で定義できて使い回すことができる。

\`\`\`js
{#snippet snip(arg)}
  <h1>{arg}</h1>
{/snippet}

{@render snip('Hello')}
\`\`\`

→ \`<h1>Hello</h1>\`
`;
</script>

<PaddingPane>
  <Markdown {md} />
</PaddingPane>
