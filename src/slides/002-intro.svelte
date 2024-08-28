<script lang="ts">
  import PaddingPane from "../components/PaddingPane.svelte";
  import Markdown from "../components/Markdown.svelte";
  const md = `
## だれ？

**ssssota**

* フロントエンドエンジニア
* Svelte Online Meetup常連
	* 3/4回（最多？）
* Svelte関連のライブラリをよく作ってる
	* \`svelte-exmarkdown\`
	* \`svelte-twc\`
	* \`svelte-(jsx|preact|react)-snippet\`
`;
</script>

<PaddingPane>
  <Markdown {md} />
</PaddingPane>
