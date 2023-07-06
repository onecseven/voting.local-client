<script lang="ts">
  export let polls  
//TODO on click got to Poll componentß
</script>


<ul>
  {#each polls as poll}
    <li>{poll.name}</li>
  {/each}
</ul>