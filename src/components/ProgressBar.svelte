<script lang="ts">
  type Props = { progress: number };
  const { progress }: Props = $props();
</script>

<div style="transform: scaleX({progress});"></div>

<style>
  div {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;

    background-color: cadetblue;

    transition: transform 0.1s linear;
    transform-origin: center left;
  }
</style>
