const fs = require('fs')

fs.readFile('sample.txt',"utf8",(err,data) =>  {
           if(err)
           {
            console.error(err)
            return
           }
           console.log(data)
})


fs.appendFile('sample.txt', "hello ", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
//In the same way write file

fs.writeFile('sample.txt', "hello ", (err) => {
    if (err) throw err;
    console.log('The file has been written!');
  });


  const newperson={
    name:"Devi",
    age:21,
    dept:"CSE"
}

fs.readFile('sample.json','utf8',(err,data)=>{
if(err){
    console.log(err)
    return
}
const json=JSON.parse(data)
const newlist=[...json,newperson]
fs.writeFile('sample.json',JSON.stringify(newlist),(err)=>{
    if(err){
        console.log(err)
        return
    }
})
})

fs.readFile('sample.json','utf8',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    const json=JSON.parse(data)
    const newlist=json.filter((data)=>data.name!=="Sara")
    fs.writeFile('sample.json',JSON.stringify(newlist),(err)=>{
        if(err){
            console.log(err)
            return
        }
    })
})