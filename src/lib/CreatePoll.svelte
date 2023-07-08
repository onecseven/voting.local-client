<script lang="ts">
  import axios from "axios"
  import { Link } from "svelte-routing"

  //TODO post poll
  //form elements auto routes enter to the button
let name: string = ""
  let options: string[] = []
  let current_value: string = ""
  
  const add_value = () => {
    if (current_value) options = options.concat([current_value])
    current_value = ""
  }

  const submit = () => axios
                      .post("")
                      .then(({data}: {data: Poll[]} )=> data)

   
</script>

<label>poll name</label>
<input bind:value={name} placeholder="" type="text" />
<br />
<br />
{#each options as option}
 <h2>{option}</h2>
{/each}
<form on:submit|preventDefault >
  <input bind:value={current_value} type="text" />
  <button on:click={add_value}>✓</button>
</form >
<button disabled={!(options.length >= 2 && name.replace(/\s+/g, ""))} type="submit">create poll</button>
