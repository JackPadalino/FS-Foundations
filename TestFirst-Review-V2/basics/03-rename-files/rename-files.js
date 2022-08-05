/* eslint-disable no-unused-vars */

const renameFiles=fileArr=>{
    const counterObj={};
    const newFileArr=[];
    let seenFirstInstance=false;
    let fileEnding=1;
    for(let file of fileArr){
        if(file in counterObj){
            counterObj[file]++;
        }else{
            counterObj[file]=1;
        };
    };
    for(let file of fileArr){
        if(counterObj[file]>1){
            if(seenFirstInstance){
                while(true){
                    const testFile=`${file}(${fileEnding})`;
                    if(fileArr.includes(testFile)){
                        fileEnding++;
                    }else{
                        break;
                    };
                };
                const newFile=`${file}(${fileEnding})`;
                newFileArr.push(newFile)
                fileEnding++;
            }else{
                newFileArr.push(file);
                seenFirstInstance=true;
            };
        }else{
            newFileArr.push(file);
        };
    };
    return newFileArr;
};