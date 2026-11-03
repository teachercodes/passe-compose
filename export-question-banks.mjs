import fs from 'node:fs';
import vm from 'node:vm';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const html=fs.readFileSync(resolve(root,'index.html'),'utf8');
const source=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
if(!source||!source.includes('function fresh()'))throw new Error('Cannot find the game data block.');
const data=source.slice(0,source.indexOf('function fresh()'));
const context=vm.createContext({});
new vm.Script(data).runInContext(context,{timeout:5000});
const exit=vm.runInContext('JSON.stringify(EXIT_BANK,null,2)',context);
const neon=vm.runInContext('JSON.stringify({NEON_BANK,endingPatterns:endingPatterns.map(({id,label,answer})=>({id,label,answer}))},null,2)',context);
fs.writeFileSync(resolve(root,'Exit_Ticket_Question_Bank.json'),exit);
fs.writeFileSync(resolve(root,'Neon_Side_Quest_Bank.json'),neon);
console.log('Updated both question-bank mirrors from index.html.');
