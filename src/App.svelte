<script lang="ts">
  import { Router, Route } from "svelte-routing"
  import Home from "./lib/Home.svelte"
  import Poll from "./lib/Poll.svelte"
  import CreatePoll from "./lib/CreatePoll.svelte"
</script>

<Router>
  <Route path="/"><Home /></Route>
  <Route path="/poll"><Poll /></Route>
  <Route path="/create_poll"><CreatePoll/></Route>
  <Route path="/poll_answers"><p>TODO</p></Route>
</Router>
<style>
  :global(button) {
    transition: all 0.25s;
  }
</style>
