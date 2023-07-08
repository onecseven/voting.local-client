
<script lang="ts">
  //DISPLAYS THE SPECIFIED POLL
  //DONE display the poll
  //TODO make the poll draggable and stuff - "svelte-dnd-action"
  //TODO name field require for posting rankings
  //TODO make a submit button at the end that sends your ranking
  //TODO make an add option thing
  import { selected } from "../store";
  import AddRanking from "./poll/AddRanking.svelte"
</script>

{#if $selected}
<h2><code>{$selected.name}</code></h2>
<input placeholder="name input" type="text">
<ul>
  {#each $selected.options as option}
  <button>
    {option}
  </button>
  <br>
  {/each}
</ul>
<AddRanking/>
<button>
  submit ranking
</button>
{:else}
<p>nothing here</p>
{/if}



<style>
    .callout {
    background-color: rgba(63, 62, 62, 0.365);
    border: 1px solid rgba(211, 211, 211, 0.386);
    border: 0;
    box-shadow: none;
    margin: 0;
    margin-left: 0px;
    margin-left: 8px;
    padding:0;
    width: auto;
    max-width: 20vw;
    float: left;
    min-width: 210px;
  }
  ul{

  }
</style>