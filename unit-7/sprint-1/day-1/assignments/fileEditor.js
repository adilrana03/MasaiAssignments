const fs = require('fs');

const operationName = process.argv[2];
const fileName = process.argv[3];
const inputData = process.argv[4];

// switch (operationName) {
//     case 'read':
//         fs.readFile(fileName, 'utf8', (err, inputData) => {
//             if (err) throw err;
//             console.log(inputData);
//         });
//         break;
//     case 'append':
//         fs.appendFile(fileName, inputData, 'utf8', (err) => {
//             if (err) throw err;
//             console.log(`Data appended to ${fileName}`);
//         });
//         break;
//     case 'delete':
//         fs.unlink(fileName, (err) => {
//             if (err) throw err;
//             console.log(`File ${fileName} deleted.`);
//         });
//         break;
//     case 'create':
//         fs.writeFile(fileName, '', (err) => {
//             if (err) throw err;
//             console.log(`File ${fileName} created.`);
//         });
//         break;
//     case 'rename':
//         fs.rename(fileName, inputData, (err) => {
//             if (err) throw err;
//             console.log(`File ${fileName} renamed to ${inputData}`);
//         });
//         break;
//     case 'list':
//         fs.readdir(fileName, (err, files) => {
//             if (err) throw err;
//             console.log(files);
//         });
//         break;
//     default:
//         console.log('Invalid operation');
// }





switch(operationName){
        case 'read':
                fs.readFile(fileName,'utf-8',(err, inputData) => {
                        if(err) throw err;
                        console.log(inputData);
                });
                break;
                case 'append':
                        fs.appendFile(fileName, inputData, 'utf-8',(err)=>{
                                if(err) throw err;
                                console.log(`Data appended to ${fileName}`);
                        });
                        break;
                        case 'create':
                                fs.writeFile(fileName,'', 'utf-8',(err)=>{
                                        if(err) throw err;
                                        console.log(`${fileName} is created`);
                                })
                                break;

                                case 'delete':
                                        fs.unlink(fileName,(err,files)=>{
                                                if(err) throw err;
                                                console.log(`${files} is deleted`);
                                        });
                                        break;

                                        case 'rename' :
                                                fs.rename(fileName, inputData,(err)=>{
                                                        if(err) throw err ;
                                                        console.log(`${fileName} is re-named as ${inputData}`);
                                                })

                                        case 'list' :
                                                fs.readdir(fileName, (err)=>{
                                                        if(err) throw err;
                                                        console.log(fileName);
                                                });
                                                break;

                                                default:
                                                                console.log('Invalid operation');
}