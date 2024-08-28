<script lang="ts">
  import SlideView from "./components/SlideView.svelte";
  import "./global.css";
  import HorizontalLayout from "./components/HorizontalLayout.svelte";
  import VerticalLayout from "./components/VerticalLayout.svelte";
  import slides from "$slides";
  type Props = { listView?: boolean };
  let { listView }: Props = $props();
  let scrollFn = $state<SlideView[]>([]);
  let page = $state(0);

  $effect(() => {
    window.history.replaceState(null, "", `#${page}`);
  });

  const handleKeydown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowRight":
      case "Space":
      case "Enter":
        // page.next();
        break;
      case "ArrowLeft":
        // page.prev();
        break;
    }
  };
  const Layout = listView ? VerticalLayout : HorizontalLayout;
</script>

<svelte:window on:keydown={handleKeydown} />

<Layout>
  {#each slides as Slide, i}
    {@const id = i.toString()}
    <SlideView
      {id}
      bind:this={scrollFn[i]}
      onleftclick={scrollFn[i - 1]?.scrollIntoView}
      onrightclick={scrollFn[i + 1]?.scrollIntoView}
      onscreenenter={() => (page = i)}
    >
      <Slide />
    </SlideView>
  {/each}
</Layout>
