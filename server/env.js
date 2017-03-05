'use strict';

const env = process.env;
const up = (a) => a.toUpperCase();

module.exports = parse;
module.exports.bool = (name) => Boolean(parse(name));

function parse(name) {
    const small = `cloudcmd_${name}`;
    const big = up(small);
    
    return env[small] || env[big];
}

