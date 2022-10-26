const t = require('tap')
const HostedGit = require('..')
const parseUrl = require('../lib/parse-url.js')

t.test('can parse git+ssh url by default', async t => {
  // https://github.com/npm/cli/issues/5278
  const u = 'git+ssh://git@abc:frontend/utils.git#6d45447e0c5eb6cd2e3edf05a8c5a9bb81950c79'
  t.ok(parseUrl(u))
  t.ok(HostedGit.parseUrl(u))
})
