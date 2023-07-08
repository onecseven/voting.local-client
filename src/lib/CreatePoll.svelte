<script lang="ts">
  import axios from "axios"
  import { Link, navigate } from "svelte-routing"
  import type { Poll } from "../types"
  import { selected } from "../store"

let name: string = ""
  let options: string[] = []
  let current_value: string = ""
  
  const add_value = () => {
    if (current_value) options = options.concat([current_value])
    current_value = ""
  }

  const submit = () => axios
                      .post("http://127.0.0.1:3333/polls", ({name, options}))
                      .then(({data}: {data: Poll}) => selected.set(data))
                      .then(() => navigate("/poll"))
                      .catch(e => console.error('submit error'))
   
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
<button disabled={!(options.length >= 2 && name.replace(/\s+/g, ""))} on:click={submit} type="submit">
create poll
</button>
