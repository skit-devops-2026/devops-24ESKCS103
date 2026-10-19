const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');

test('LifeQuest entry page exists', () => {
  assert.equal(fs.existsSync(path.join(root, 'index.html')), true);
});

test('Entry page redirects to the home page', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.match(html, /frontend\/pages\/home\.html/);
});

test('Home page exists', () => {
  assert.equal(
    fs.existsSync(path.join(root, 'frontend/pages/home.html')),
    true
  );
});

test('Vite build script is configured', () => {
  const pkg = JSON.parse(
    fs.readFileSync(path.join(root, 'package.json'), 'utf8')
  );
  assert.equal(pkg.scripts.build, 'vite build');
});
