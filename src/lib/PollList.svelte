<script lang="ts">
  import type { Poll } from "../types"
  import { selected } from "../store"
  import { Router, Route } from "svelte-routing"
  import { Link } from "svelte-routing"
  export let polls: Poll[]
  const select = (selection: Poll) => selected.set(selection)
</script>

<div class="pollList">
  {#each polls as poll}
    <div>
      <Link class="pollo" to="/poll">
        <button on:click={() => select(poll)}>
          {poll.name}
        </button>
      </Link>
    </div>
  {/each}
</div>

<style>
  button {
    width: 200px;
    height: 40px;
    text-align: left;
    font-size: larger;
    filter: hue-rotate(210deg);
  }

  button:hover {
    border-bottom: 2px solid #d9d8dc;
  }

  .pollList {
    display: grid;
  }

  .pollList > * {
    margin: 0.5% 0 1% 0;
  }

  :global(.pollo):hover {
    border-bottom: none;
  }
</style>
