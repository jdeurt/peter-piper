const { exec } = require("node:child_process");

const version = process.argv.slice(-1)[0];

if (!version || !["major", "minor", "patch"].includes(version)) {
    throw new Error(
        "Invalid version argument. Expected one of 'major', 'minor', or 'patch' to be present."
    );
}

console.info("Running tests...");

exec("npm run test:json", (err, stdout, stderr) => {
    if (err) {
        throw err;
    }

    if (stderr) {
        throw new Error(`Unexpected output in stderr:\n${stderr}`);
    }

    const { stats } = JSON.parse(stdout.match(/\{.*\}/)[0]);

    if (stats.failures !== 0) {
        console.error(`Could not proceed. ${stats.failures} tests failed.`);
        console.error("Run 'npm run test' to view more info.");
    }

    exec(`npm run publish:${version}`).stdout.pipe(process.stdout);
});
