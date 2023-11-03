//Using Map method 
//output:['Mike Sheridan', 'Tim Lee', 'John Carte'] 

const users = [ 

  { 
    first_name: 'Mike', 
    last_name: 'Sheridan' 
  }, 

  { 
    first_name: 'Tim', 
    last_name: 'Lee' 
  }, 

  { 
    first_name: 'John', 
    last_name: 'Carte' 
  } 

]; 

   let ans=users.map((e)=>{
	   return `${e.first_name} ${e.last_name}`
   })
  document.write(ans)
   
   