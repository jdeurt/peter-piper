## Publishing

Once all `TODO` notes have been updated & your new module is ready to be shared, all that's left to do is decide its new version &mdash; AKA, do the changes consitute a `patch`, `minor`, or `major` release?

Once decided, you can run the following:

```sh
$ npm version <patch|minor|major> && git push origin master --tags && npm publish
# Example:
# npm version patch && git push origin master --tags && npm publish
```

This command sequence will:

-   version your module, updating the `package.json` "version"
-   create and push a `git` tag (matching the new version) to your repository
-   build your module (via the `prepublishOnly` script)
-   publish the module to the npm registry

## License

MIT © [Juan de Urtubey](https://jdeurt.xyz)
