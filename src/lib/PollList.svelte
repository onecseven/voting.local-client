<script lang="ts">
  import type { Poll } from "../types"
  import { selected, polls } from "../store"
  import { Router, Route } from "svelte-routing"
  import { Link } from "svelte-routing"
  const select = (selection: Poll) => selected.set(selection)
</script>

{#if $polls}
<div class="pollList">
  {#each $polls as poll}
    <div>
      <Link class="pollo" to="/poll">
        <button on:click={() => select(poll)}>
          {poll.name}
        </button>
      </Link>
    </div>
  {/each}
</div>
{/if}

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
    margin: 2.5%;
  }

  .pollList > * {
    margin: 2% 0 1% 0;
  }

  :global(.pollo):hover {
    border-bottom: none;
  }
</style>
