<script lang="ts">
  import { Router, Route } from "svelte-routing"
  import Home from "./lib/Home.svelte"
  import Poll from "./lib/Poll.svelte"
  import CreatePoll from "./lib/CreatePoll.svelte"
  import Ranking from "./lib/ranking/Ranking.svelte"
</script>

<Router>
  <body>
    <Route path="/"><Home /></Route>
    <Route path="/poll"><Poll /></Route>
    <Route path="/create_poll"><CreatePoll/></Route>
    <Route path="/poll_answers"><p>TODO</p></Route>
    <Route path="/rankings"><Ranking/></Route>
  </body>
</Router>
<style>
  :global(button) {
    transition: all 0.25s;
    border-radius: 5px;
  }
</style>
