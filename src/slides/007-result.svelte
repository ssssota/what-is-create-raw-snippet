<script lang="ts">
  import Markdown from "../components/Markdown.svelte";
  import PaddingPane from "../components/PaddingPane.svelte";
  const md = `\
## まとめ

- \`createRawSnippet\`を使うことでコンポーネント外でSnippetが定義できる
- インターフェースのクセが強い！
  - Rawという名前だけあって、**生のHTML/Elementを扱う**
- 直接使う場合は注意が必要
  - **イベントリスナーの解除**を忘れないように
  - デフォルトで**更新されない**ことを意識する
  - 内部でコンポーネントは使えない
- 基本的には**テスト用途での利用に留め**たほうが良さそう
  - 本格的に使うならラッパーを作ることを検討する
\`\`\`
`;
</script>

<PaddingPane>
  <Markdown {md} />
</PaddingPane>
