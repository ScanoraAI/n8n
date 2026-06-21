// Passenger entrypoint — this is the file cPanel's "Setup Node.js App" runs.
// Passenger assigns a port via process.env.PORT; n8n needs that as N8N_PORT.
process.env.N8N_PORT = process.env.PORT || process.env.N8N_PORT || '5678';

// Force the "start" command regardless of how Passenger invokes this file.
process.argv[2] = 'start';

// `pnpm deploy` bundles n8n's published CLI launcher at ./bin/n8n in the
// flattened output. If this path 404s after your first deploy, check what
// deploy-output/ actually contains and adjust this require path.
require('./bin/n8n');
