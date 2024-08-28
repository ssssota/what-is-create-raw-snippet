<script lang="ts">
  import CenteringPane from "../components/CenteringPane.svelte";
  import Markdown from "../components/Markdown.svelte";
  const md = `
## \`createRawSnippet\`とは？

Svelte 5で登場予定の新しいAPI
`;
</script>

<CenteringPane>
  <Markdown {md} />
</CenteringPane>
