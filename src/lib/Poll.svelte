
<script lang="ts">
  import { Link, navigate } from "svelte-routing"
  import { selected } from "../store";
  import SortableOptions from "./poll/SortableOptions.svelte"
</script>

{#if $selected}
<h2><code>{$selected.name}</code></h2>
<SortableOptions />
{:else}
  <p> Nothing here...</p>
  <Link to="/">
    <button>
      Reload
    </button>
  </Link>
{/if}




