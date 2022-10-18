export const ascendingUser=(state)=>{

if(state.currentCategory==="Ascending"){
return state.users.sort((a,b)=>{    
     if (a.first_name < b.first_name) {
    return -1;
  }
  if (a.first_name > b.first_name) {
    return 1;
  }
  return 0;
  })
}
if(state.currentCategory==="Descending"){
const descUsers= state.users.sort((a,b)=>{    
     if (a.first_name < b.first_name) {
    return -1;
  }
  if (a.first_name > b.first_name) {
    return 1;
  }
  return 0;
  })

  return descUsers.reverse();
}   
   
}
