import { promptSecret } from "./mod.ts";

try {
	const password = await promptSecret("What's your password? ");
	console.log("You said: ", password);
} catch (err) {
	console.log(err);
}
