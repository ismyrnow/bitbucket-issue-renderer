Bitbucket Issue Renderer
------------------------

Converts issues exported from Bitbucket from JSON to a single HTML file.

## Usage

Export your issues to a file called `db-1.0.json`. Place it in the project's root directory. Then:

```
npm start
```

This produces two files:

- /output/issues.db: an NEDB file with the issues and comments joined together.
- /output/index.html: all of the issues and comments as HTML.
 
Change the output by editing the handlebars views in the /views directory.

Be sure to delete the issues.db file before rerunning the app.