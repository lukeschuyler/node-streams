#!/usr/bin/env node

const fs = require('fs')
const util = require('util')
const { Writable, Transform } = require('stream');
const writeStream = Writable();
const transformStream = Transform();
const readStream = fs.createReadStream(process.argv[2])

transformStream._transform = (buffer, _, done) => {
  fs.writeFileSync(`09_CAPS.json`, util.inspect(`${buffer.toString().toUpperCase()}`) , 'utf-8');
  done(null, `${buffer.toString().toUpperCase()}`)
}

readStream.pipe(transformStream).pipe(process.stdout)
