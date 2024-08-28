<script lang="ts">
  import Markdown from "svelte-exmarkdown";
  import PaddingPane from "../components/PaddingPane.svelte";
  const md = `\
# Markdown

This slide is written in Markdown.

\`\`\`
console.log('this is code block');
\`\`\`
`;
</script>

<PaddingPane>
  <Markdown {md} />
</PaddingPane>
