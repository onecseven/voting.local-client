import { writable, type Writable } from "svelte/store";
import type { Poll } from "./types";

export const selected: Writable<Poll> = writable(null)
export const polls: Writable<Poll[]> = writable(null)


