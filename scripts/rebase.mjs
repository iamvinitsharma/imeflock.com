// Post-build: prefix root-relative URLs ("/img/…", href="/services/", url(/img/…)) with BASE_PATH
// so a preview build works from a sub-folder such as https://user.github.io/imeflock.com/.
// No-op when BASE_PATH is "/" (production on limeflock.com).
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');
if (base === '/') process.exit(0);
const prefix = base.slice(0, -1); // "/imeflock.com"
const esc = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const notYet = `(?!/|${esc.slice(1)}/)`; // skip protocol-relative and already-prefixed paths

const rules = [
  [new RegExp(`((?:href|src|action|poster|content)=["'])/${notYet}`, 'g'), `$1${prefix}/`],
  [new RegExp(`(url\\(["']?)/${notYet}`, 'g'), `$1${prefix}/`],
  [new RegExp(`(["'\`])/(img|video|favicon\\.png)`, 'g'), `$1${prefix}/$2`],
];

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (['.html', '.css', '.js'].includes(extname(p))) yield p;
  }
}

let n = 0;
for await (const file of walk('dist')) {
  const src = await readFile(file, 'utf8');
  let out = src;
  for (const [re, to] of rules) out = out.replace(re, to);
  if (out !== src) { await writeFile(file, out); n++; }
}
console.log(`rebase: prefixed URLs with ${prefix} in ${n} files`);
