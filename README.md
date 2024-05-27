# proteinpedia-next

A new and improved approach to writing the backend support for the Proteinpedia
Project, supported by Next.js and TypeScript through the use of unified frontend
and backend files in the utilisation of Server Components.

## Deployment

### On devenv.sh-enabled NixOS systems

Run:`devenv up` or `devenv up -d` to run programs in foreground or background
respectively.

### On other systems

Ensure that ferretdb and postgresql are installed on the server, where the user
`ferretdbuser` exists on postgresql and all privileges on `ferretdb.*` are given
to it.\
FerretDB should be configured to connect to postgresql on the `ferretdb`
database.\
Having done so, with FerretDB running, `npm run dev` to run a hot-reloading
development environment and `npm run build && npm start` to build a local
production environment.
