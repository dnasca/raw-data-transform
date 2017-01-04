/* Let's pretend we have a tab delimited list of data as seen below

data.txt
name gender age
---
derrik nasca  male  31
kathleen nasca  female  27
bernie nasca  male  1
toes nasca  female  5
---

the goal is to transform this raw data into an array of objects
*/

import fs from 'fs'

let output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [] //if not exists, make new array
    customers[line[0]].push({
      name: line[1],
      gender: line[2],
      age: line[3]
    })
    return customers
  }, {})

console.log('output:', JSON.stringify(output, null, 2))

/* output:
[
  {
    "name": "derrik nasca",
    "gender": "male",
    "age": 31
  },
  {
    "name": "kathleen nasca",
    "gender": "female",
    "age": 27
  },
  {
    "name": "bernie nasca",
    "gender": "male",
    "age": 1
  },
  {
    "name": "toes nasca",
    "gender": "female",
    "age": 5
  }
]
*/
