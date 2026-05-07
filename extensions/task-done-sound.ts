/**
 * Task Done Sound
 *
 * Plays a system sound whenever pi finishes processing a task (agent_end event).
 * Uses `afplay` on macOS to play Bottle.aiff.
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { exec } from "node:child_process";

const SOUND_PATH = "/System/Library/Sounds/Bottle.aiff";

export default function (pi: ExtensionAPI) {
	pi.on("agent_end", async () => {
		exec(`afplay "${SOUND_PATH}"`, (err) => {
			if (err) {
				console.error("[task-done-sound] Failed to play sound:", err.message);
			}
		});
	});
}
