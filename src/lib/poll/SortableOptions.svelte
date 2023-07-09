<script lang="ts">
  import { dndzone } from "svelte-dnd-action"
  import { getUniqueID } from "./getUniqueID"
  import { selected } from "../../store"
  import AddRanking from "./AddRanking.svelte"
  import axios from "axios"
  import { navigate } from "svelte-routing"
  const flipDurationMs = 200
  let user = ""

  $: deco_items = $selected.options.map((option) => ({
    option,
    id: getUniqueID(),
  }))
  
  const submit = () => axios
                      .post("http://127.0.0.1:3333/ranking", ({user, poll: $selected.name, ranking: deco_items.map(({option}) => option)}))
                      .then(({data}) => selected.set(data) )
                      .then(() => navigate("/rankings"))
                      .catch(e => console.error('submit error'))

  function handleSort(e) {
    deco_items = e.detail.items
  }
</script>

<input bind:value={user} placeholder="What's your name?" type="text" />
<main>
  <ul
    class="callout"
    use:dndzone={{ items: deco_items, flipDurationMs }}
    on:consider={handleSort}
    on:finalize={handleSort}
  >
    {#each deco_items as item (item.id)}
      <button class="item">
        ▸ {item.option}
      </button>
    {/each}
    <AddRanking />
    <button disabled={!(user.length >= 2 && user.replace(/\s+/g, ""))}  on:click={submit} > submit ranking </button>
  </ul>
</main>

<style>
  ul {
    margin: 0;
  }
  ul > * {
    margin: 2% 0 2% 0;
  }

  button {
    width: 100%;
    height:40px;
  }

  button:hover {
    border-bottom: 2px solid #d9d8dc;
  }
  .item {
    text-align: left;
    width: 100%;
    height: 40px;
    filter: hue-rotate(115deg);
    font-size: larger;
  }

  .callout {
    background-color: rgba(63, 62, 62, 0.365);
    border: 1px solid rgba(211, 211, 211, 0.386);
    border: 0;
    box-shadow: none;
    margin: 0;
    margin-left: 0px;
    padding: 0;
    width: auto;
    max-width: 20vw;
    float: left;
    min-width: 210px;
  }
  ul {
  }
</style>
