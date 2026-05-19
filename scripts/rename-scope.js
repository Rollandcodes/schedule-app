const fs = require('fs');
const path = require('path');

function replaceInPackageJson(file) {
  const raw = fs.readFileSync(file, 'utf8');
  let pkg;
  try {
    pkg = JSON.parse(raw);
  } catch (e) {
    console.error('skip', file, 'invalid json');
    return { changed: false };
  }
  let changed = false;
  if (pkg.name && pkg.name.startsWith('@schedule/')) {
    pkg.name = pkg.name.replace(/^@calcom\//, '@schedule/');
    changed = true;
  }

  const depSections = ['dependencies','devDependencies','peerDependencies','optionalDependencies'];
  for (const sec of depSections) {
    if (!pkg[sec]) continue;
    const keys = Object.keys(pkg[sec]);
    for (const k of keys) {
      if (k.startsWith('@schedule/')) {
        const newKey = k.replace(/^@calcom\//, '@schedule/');
        pkg[sec][newKey] = pkg[sec][k];
        delete pkg[sec][k];
        changed = true;
      }
      const v = pkg[sec][k];
      if (typeof v === 'string' && v.includes('@schedule/')) {
        pkg[sec][k] = v.replace(/@calcom\//g, '@schedule/');
        changed = true;
      }
    }
  }

  if (pkg.scripts) {
    for (const key of Object.keys(pkg.scripts)) {
      const s = pkg.scripts[key];
      if (typeof s === 'string' && s.includes('@schedule/')) {
        pkg.scripts[key] = s.replace(/@calcom\//g, '@schedule/');
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(file, JSON.stringify(pkg, null, 2) + '\n');
  }
  return { changed };
}

function replaceInTsconfig(file) {
  const raw = fs.readFileSync(file, 'utf8');
  let obj;
  try { obj = JSON.parse(raw); } catch (e) { return { changed: false }; }
  let changed = false;
  if (obj.extends && typeof obj.extends === 'string' && obj.extends.includes('@schedule/')) {
    obj.extends = obj.extends.replace(/@calcom\//g, '@schedule/');
    changed = true;
  }
  if (obj.compilerOptions && obj.compilerOptions.paths) {
    const paths = obj.compilerOptions.paths;
    const newPaths = {};
    for (const key of Object.keys(paths)) {
      let newKey = key;
      let newVals = paths[key];
      if (key.includes('@schedule/')) {
        newKey = key.replace(/@calcom\//g, '@schedule/');
        changed = true;
      }
      newVals = newVals.map(v => v.replace(/@calcom\//g, '@schedule/'));
      if (JSON.stringify(newVals) !== JSON.stringify(paths[key])) changed = true;
      newPaths[newKey] = newVals;
    }
    obj.compilerOptions.paths = newPaths;
  }
  if (changed) fs.writeFileSync(file, JSON.stringify(obj, null, 2) + '\n');
  return { changed };
}

function walk(dir, patterns, ignore) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (let file of list) {
    const filePath = path.join(dir, file);
    if (ignore.some(i => filePath.includes(i))) continue;
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath, patterns, ignore));
    } else {
      if (patterns.some(p => file.match(p))) {
        results.push(filePath);
      }
    }
  }
  return results;
}

function main() {
  const root = path.resolve(__dirname, '..');
  const pkgFiles = walk(root, [/package\.json$/], ['node_modules', '.next', 'dist', '.git']);
  const tsFiles = walk(root, [/tsconfig.*\.json$/], ['node_modules', '.next', 'dist', '.git']);
  const textFiles = walk(root, [/.+\.(ts|tsx|js|jsx|json|md|yml|yaml)$/ , /Dockerfile$/, /Procfile$/], ['node_modules', '.next', 'dist', '.git', 'yarn.lock', 'package-lock.json']);

  let pkgChanged = 0, tsChanged = 0;
  for (const f of pkgFiles) {
    const res = replaceInPackageJson(f);
    if (res.changed) pkgChanged++;
  }
  for (const f of tsFiles) {
    const res = replaceInTsconfig(f);
    if (res.changed) tsChanged++;
  }
  let textChanged = 0;
  for (const f of textFiles) {
    // skip package.json and tsconfig since handled above
    if (f.endsWith('package.json') || f.match(/tsconfig.*\.json$/)) continue;
    try {
      const raw = fs.readFileSync(f, 'utf8');
      if (raw.includes('@schedule/')) {
        const updated = raw.replace(/@calcom\//g, '@schedule/');
        fs.writeFileSync(f, updated, 'utf8');
        textChanged++;
      }
    } catch (e) {
      // ignore binary or unreadable files
    }
  }
  console.log('package.json files changed:', pkgChanged);
  console.log('tsconfig files changed:', tsChanged);
  console.log('text files changed:', textChanged);
}

main();
