# Prompts

Command line prompts for Deno

## Example

*Note*: This makes use of `Deno.setRaw` which is still unstable as of v1.0.3 so
the examples require the `--unstable` flag to run.

```typescript
import { promptSecret } from "https://deno.land/x/prompts/mod.ts";

let secret = null;
do {
	secret = await promptSecret("What is the secret password? ");
} while (secret != "password");

console.log("Indeed, the ultimate secure password is indeed 'password', welcome to Deno Land!");
```
