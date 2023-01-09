module.exports = core;

const colors = require('colors/safe');
const log = require('npmlog');
const semver = require('semver');


const pkg = require('../../../package.json');

const LOWVER_VERSION = '12.0.0';

function core(params) {
  try {
    prepare();
  } catch (error) {
    log.error(log.error(colors.red(error.message)))
  }
  console.log('exec',params)
}


function prepare() {
  checkPkgVersion();
  checkNodeVersion();
}
function checkPkgVersion() {
  console.log(pkg.version)
}

function checkNodeVersion() {
  const currentVersion = process.version;
  console.log(currentVersion);
  if (!semver.gte(currentVersion, LOWVER_VERSION)) {
    throw new Error(`the node version need above ${ LOWVER_VERSION }`)
  }
}