<script lang="ts">
  import axios from 'axios'
  import PollList from './PollList.svelte'
  import type { Poll } from "../types"
  import { Link } from 'svelte-routing'
  import { onMount } from 'svelte'
  import { polls } from '../store'
  onMount(() => {
    const res = axios
      .get(`http://127.0.0.1:3333/polls`)
      .then(({ data }: {data: Poll[]}) => polls.set(data))
      .catch((e) => console.error("error mounting polls"))
  })

</script>

<main>
  <h1>active polls</h1>
  <PollList/>
  <Link to="create_poll">
    <button>
      create poll
    </button>
  </Link>
</main>

<style>
    button:hover {
    border-bottom: 1px solid #d9d8dc;
  }
</style>