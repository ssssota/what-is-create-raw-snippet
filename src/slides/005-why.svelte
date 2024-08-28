<script lang="ts">
  import Markdown from "../components/Markdown.svelte";
  import PaddingPane from "../components/PaddingPane.svelte";
  const md = `\
## \`createRawSnippet\`はなぜ必要か

> コンポーネント内で定義できて

「コンポーネント外では定義できないんですか😠」を解決する

例えば、テスト。
\`\`\`js
test('render snippet children', () => {
  render(SomeComponent, {
    props: { children: '🤔🤔🤔' },
  });
});
\`\`\`
`;
</script>

<PaddingPane>
  <Markdown {md} />
</PaddingPane>
