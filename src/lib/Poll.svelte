
<script lang="ts">
  import { Link, navigate } from "svelte-routing"
  import { selected } from "../store";
  import SortableOptions from "./poll/SortableOptions.svelte"
  import Error from "./Error.svelte"
</script>

{#if $selected}
<h2><code>{$selected.name}</code></h2>
<Link to="/rankings">
  <button>
    See results
  </button>
</Link>
<SortableOptions />
<Link to="/">
  <button class="goback">
    Go back
  </button>
</Link>
{:else}
 <Error/>
{/if}


<style>
  .goback {
    margin-top: 4%;
    filter: hue-rotate(-20deg);
  }
  button{
    margin-bottom: 4%;
    filter: hue-rotate(220deg);
  }
</style>


