<script lang="ts">
export let items: string[]
</script>

<main>
  <ul
    class="callout"
  >
    {#each items as item}
      <button class="item">
        {item}
      </button>
    {/each}
  </ul>
</main>

<style>

  button {
    width: 100%;
    height:40px;
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