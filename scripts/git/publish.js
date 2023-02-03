const { exec } = require("node:child_process");

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

    console.info(
        `All ${stats.passes} tests passed or had expected failures. Proceeding...`
    );
});
