<script lang="ts">
  import axios from 'axios'
  import PollList from './PollList.svelte'
  import type { Poll } from "../types"
  import { Link } from 'svelte-routing'
  let promise = axios.get("http://127.0.0.1:3333/polls").then(({data}: {data: Poll[]} )=> data)
</script>

<main>
  <h1>active polls</h1>
  {#await promise}
  <p>waiting for server...</p>
  {:then polls}
  <PollList {polls} />
  {:catch error}
  <p>error</p>
  {/await}
  <Link to="create_poll">
    <button>
      This goes to CreatePoll
    </button>
  </Link>
</main>