<script lang="ts">
  import { onMount } from "svelte"
  import { selected } from "../../store"
  import ButtonList from "../ButtonList.svelte"
  import Error from "../Error.svelte"
  import axios from "axios"
  import { Link } from "svelte-routing"
  let derived = []
  onMount(() => {
    if ($selected === null) return console.error("null selection")
    const res = axios
      .post(`/pollID`, {
        name: $selected?.name,
      })
      .then(({ data }) => selected.set(data))
      .catch((e) => console.error("pollID error"))
  })

  $: {
    let score = {}
    if ($selected) {
      Object.values($selected.rankings).forEach((ranking) => {
        ranking.forEach((option, i) => {
          if (score[option]) score[option] += (ranking.length - i)
          else score[option] = (ranking.length - i)
        })
      })
      derived = Object.entries(score)
        .map(([option, score]) => ({ option, score }))
        .sort((a, b) => (a.score < b.score ? 1 : -1))
    }
  }
</script>

{#if $selected === null}
  <Error />
{:else if derived.length === 0}
  <h2>No one has voted yet</h2>
  <Error />
{:else}
  <h2>Results</h2>
  <main>
    <ul class="callout">
      {#each derived.map(({ option }) => option) as item, i}
        <button
          class={"item"}
          style={`filter: hue-rotate(${
            (180 / derived.length) * (derived.length - i)
          }deg)`}
        >
          {item}
        </button>
      {/each}
    </ul>
  </main>
  {#each Object.keys($selected.rankings) as name}
    <h3>{name}</h3>
    <ButtonList
      items={$selected.rankings[name]}
      highlight={derived[0].option}
    />
  {/each}
  <br>
  <Link to="/">
    <button> Return</button>
  </Link>
{/if}

<style>
  button {
    height: 40px;
    font-size: larger;
    text-align: left;
  }

  ul {
    margin: 0;
  }
  ul > * {
    margin: 2% 0 2% 0;
  }

  .item {
    width: 100%;
    height: 40px;
    filter: hue-rotate(115deg);
  }

  .highlight {
    filter: hue-rotate(180deg);
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
    min-width: 210px;
  }
  .callout:nth-last-child(1) {
    margin-bottom: 1%;
  }
</style>
