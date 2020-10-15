var fs = require('fs')

var output = fs.readFileSync('05-data.txt', 'utf8')
.trim()
.split('\n')
.map(line => line.split('\t'))
.reduce((customers, line)=>{
    customers[line[0]] = []
    return customers
 })

console.log('output', output)
