<script lang="ts">
  import type { Poll } from "../types"
  import { selected } from "../store"
  import { Router, Route } from "svelte-routing"
  import { Link } from "svelte-routing"
  export let polls: Poll[]
  const select = (selection: Poll) => selected.set(selection)
</script>

<div class='pollList'>
  {#each polls as poll}
  <Link class="pollo" to="/poll">
    <button on:click={() => select(poll)}>
        {poll.name}
      </button>
    </Link>
  {/each}
  </div>

<style>
  button {
    width: 200px;
    height: 40px;
    text-align: left;
    font-size: larger;
  }

  button:hover {
    border-bottom: 2px solid #d9d8dc;
  }

  .pollList {
    display: grid;
  }

  :global(.pollo):hover {
    border-bottom: none;
  }
</style>
