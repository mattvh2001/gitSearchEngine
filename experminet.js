
repos = [{a:"aa",b:"bb"},{a1:"a1a",b1:"b1b"}]

let commitRes;
let newRepo;
repos.forEach(async(repo,index)=>{
    
    commitRes = ["this ", "no", "yes"];
    newRepo = Object.assign(repo,{commitArray:commitRes});
    this[index] = newRepo;
  });

  for(i=0;i<repos.length;i++)
  {
    console.log(repos[i]);
  }
reposit = {};

reposit["hello"] = "boyyys";

console.log(reposit)