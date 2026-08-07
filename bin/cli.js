#!/usr/bin/env node

import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import getLatestVersion from "./core/getLatestVersion.js";
import loadRunner from "./core/loadRunner.js";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf8"));

const showHelp = (version) => {
    console.log(`
express-fix-any-js-with-discovery CLI v${version}

Usage:
  npx express-fix-any-js-with-discovery <raka> <poka> [inTargetPath]

Arguments:
  raka            Value to use for configuration mapping (e.g. folderName)
  poka            Output value to write
  inTargetPath    (Optional) Path to run discovery and fixing in (default: current working directory)

Options:
  -h, --help      Show this help message
  -v, --version   Show CLI version
`);
};

const run = async () => {
  const args = process.argv.slice(2);

  if (args.includes("-h") || args.includes("--help")) {
      showHelp(pkg.version);
      process.exit(0);
  }

  if (args.includes("-v") || args.includes("--version")) {
      console.log(pkg.version);
      process.exit(0);
  }

  const raka = args[0];
  const poka = args[1];
  const inTargetPath = args[2] ? path.resolve(args[2]) : process.cwd();

  if (!raka || !poka) {
      console.error("\x1b[31mError: Both <raka> and <poka> arguments are required.\x1b[0m");
      showHelp(pkg.version);
      process.exit(1);
  }

  if (!fs.existsSync(inTargetPath)) {
      console.error(`\x1b[31mError: Target directory "${inTargetPath}" does not exist.\x1b[0m`);
      process.exit(1);
  }

  const version = getLatestVersion();
  const runner = await loadRunner(version);

  try {
      const output = await runner({ raka, poka, inTargetPath });
      console.log(JSON.stringify(output, null, 2));
  } catch (error) {
      console.error(`\x1b[31mRuntime Error: ${error.message}\x1b[0m`);
      process.exit(1);
  }
};

run().catch(err => {
    console.error(err);
    process.exit(1);
});