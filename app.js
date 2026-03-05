const fs = require('fs')

fs.writeFileSync('fileOne.txt', 'This is first line...')

const data = fs.readFileSync('fileOne.txt', 'utf-8')

// console.log(data)

// fs.writeFileSync('fileOne.txt', 'This is second line...\n')
fs.appendFileSync('fileOne.txt', '\nThis is second line...');



const data1 = fs.readFileSync('fileOne.txt', 'utf-8')


console.log(data1)