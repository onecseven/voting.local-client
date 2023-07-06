<script lang="ts">
  import axios from 'axios'
  import PollList from './lib/PollList.svelte'
  let promise = axios.get("http://127.0.0.1:3333/polls").then(({data} )=> data)
</script>

<main>
  {#await promise}
  <p>waiting for server...</p>
  {:then polls}
    <PollList {polls} />
  {:catch error}
  <p>error</p>
  {/await}
  <button>
    This goes to CreatePoll
  </button>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
