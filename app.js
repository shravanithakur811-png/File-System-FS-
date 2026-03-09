//Example One
const os = require('os')

console.log('Operating System:', os.platform())
console.log('Total Memory:', os.totalmem())

//Practice
const fs = require('fs')

fs.writeFileSync('fileOne.txt', 'This is first line...')

const data = fs.readFileSync('fileOne.txt', 'utf-8')

fs.appendFileSync('fileOne.txt', '\nThis is second line...');

const data1 = fs.readFileSync('fileOne.txt', 'utf-8')

console.log(data1)

//Example two

fs.writeFileSync('message.txt', 'Hello from Node.js!')

const data3 = fs.readFileSync('message.txt', 'utf-8')

console.log(data3)


//Example 3: File manager

const fsp = require('fs').promises  
const path = require('path')

const dirPath = path.join(__dirname, 'myFiles') 
const filePath = path.join(dirPath, 'example.txt')
const newFilePath = path.join(dirPath, 'renamedExample.txt')

async function manageFiles() {

try {

// 1.create directory
await fsp.mkdir(dirPath, { recursive: true }) 
console.log('Directory created.')

//2.write to file
await fsp.writeFile(filePath, 'Hello, this is an example text!')
console.log('File written.')

//3. read file
const data = await fsp.readFile(filePath, 'utf8')
console.log('File content:', data)

//4. Append to file
await fsp.appendFile(filePath, '\nAppending more content.')
console.log('Content appended.')

//5. rename file
await fsp.rename(filePath, newFilePath)
console.log('File renamed.')

//6. delete file
await fsp.unlink(newFilePath)
console.log('File deleted.')

//7. delete directory
await fsp.rm(dirPath, { recursive: true, force: true })
console.log('Directory deleted.')

} catch (err) {

console.error('Error:', err)

}

}

manageFiles()