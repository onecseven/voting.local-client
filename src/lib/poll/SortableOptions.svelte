<script lang="ts">
  import { dndzone } from "svelte-dnd-action"
  import { getUniqueID } from "./getUniqueID"
  import { selected } from "../../store"
  import AddRanking from "./AddRanking.svelte"
  const flipDurationMs = 200
  let name = ""

  $: deco_items = $selected.options.map((option) => ({
    option,
    id: getUniqueID(),
  }))

  function handleSort(e) {
    deco_items = e.detail.items
  }
</script>

<input bind:value={name} placeholder="What's your name?" type="text" />
<main>
  <ul
    class="callout"
    use:dndzone={{ items: deco_items, flipDurationMs }}
    on:consider={handleSort}
    on:finalize={handleSort}
  >
    {#each deco_items as item (item.id)}
      <button class="item">
        ‖ {item.option}
      </button>
    {/each}
    <AddRanking />
    <button> submit ranking </button>
  </ul>
</main>

<style>
  ul {
    margin: 0;
  }
  ul > * {
    margin: 2% 0 2% 0;
  }

  button {
    width: 100%;
    height:40px;
  }

  .item {
    width: 100%;
    height: 40px;
    filter: hue-rotate(115deg);
  }

  .callout {
    background-color: rgba(63, 62, 62, 0.365);
    border: 1px solid rgba(211, 211, 211, 0.386);
    border: 0;
    box-shadow: none;
    margin: 0;
    margin-left: 0px;
    padding: 0;
    width: auto;
    max-width: 20vw;
    float: left;
    min-width: 210px;
  }
  ul {
  }
</style>
