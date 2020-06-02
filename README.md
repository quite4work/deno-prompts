# Prompts

Command line prompts for Deno

## Example

```typescript
import { promptSecret } from "https://deno.land/x/prompts/mod.ts";

let secret = null;
do {
	secret = await promptSecret("What is the secret password? ");
} while (secret != "password");

console.log("Indeed, the ultimate secure password is indeed 'password', welcome to Deno Land!");
```
