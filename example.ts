import { promptPassword } from "./mod.ts";

try {
	const password = await promptPassword("What's your password? ");
	console.log("You said: ", password);
} catch (err) {
	console.log(err);
}
