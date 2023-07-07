<script lang="ts">
  export let polls  
//TODO on click got to Poll componentß
</script>


<ul>
  {#each polls as poll}
    <button>{poll.name}</button>
  {/each}
</ul>

<style>
  button {
    width: 200px;
    height: 40px;
    text-align: left;
  }
</style>