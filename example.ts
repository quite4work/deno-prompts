import { promptSecret } from "./mod.ts";

do {
	const password = await promptSecret("What's your password? ");
	if (!password) {
		break;
	}

	console.log("You said: ", password);
} while (true);
