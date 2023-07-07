<script lang="ts">
  import type { Poll } from "../types"
  import { selected } from "../store";
  import { Router, Route } from "svelte-routing"
  import { Link } from "svelte-routing"
  export let polls: Poll[] 
  const select = (selection: Poll) => selected.set(selection)
</script>


<ul>
  {#each polls as poll}
  <Link to="/poll">
    <button on:click={() => select(poll)}> {poll.name}</button>
  </Link>
  {/each}
</ul>

<style>
  button {
    width: 200px;
    height: 40px;
    text-align: left;
    font-size: larger;
  }
</style>