<script lang="ts">

import axios from "axios"
import { selected } from "../../store";
  import type { Poll } from "../../types"
let current_value = ""
let postOption = () => axios
                .patch("http://127.0.0.1:3333/polls", ({poll: $selected.name, option: current_value}))
                .then(({data}: {data: Poll}) => selected.set(data))
                .catch(o => console.error("patch option"))

</script>

<form on:submit|preventDefault >
  <input bind:value={current_value} placeholder="add option" type="text" />
  <button disabled={!(current_value.replace(/\s+/g, "") && current_value.length > 0)} on:click={postOption}>✓</button>
</form >

<style>
  input {
    margin-top: 2%;
    height: 40px;
  }
</style>