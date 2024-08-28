import * as child_process from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as url from 'node:url';

const prettierrc = () => `\
{
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "none",
	"printWidth": 100,
	"plugins": ["prettier-plugin-svelte"],
	"overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
}
`;
const prettierignore = () => `\
pnpm-lock.yaml
package-lock.json
yarn.lock
dist
`;

const main = () => {
	const __filename = url.fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const root = path.join(__dirname, '..');
	console.log('Creating `.prettierrc` ...');
	fs.writeFileSync(path.join(root, '.prettierrc'), prettierrc());
	console.log('Creating `.prettierignore` ...');
	fs.writeFileSync(path.join(root, '.prettierignore'), prettierignore());
	console.log('Adding `prettier` to devDependencies ...');
	child_process.execSync("npm pkg set devDependencies.prettier='^3.1.1'");
	console.log('Adding `prettier-plugin-svelte` to devDependencies ...');
	child_process.execSync("npm pkg set devDependencies.prettier-plugin-svelte='^3.1.2'");
	console.log('Adding `fmt` to scripts ...');
	child_process.execSync("npm pkg set scripts.fmt='prettier --write .'");
	console.log('Adding `lint` to scripts ...');
	child_process.execSync("npm pkg set scripts.lint='prettier --check .'");
	console.log('Run `npm install` to complete setup.');
};

main();
