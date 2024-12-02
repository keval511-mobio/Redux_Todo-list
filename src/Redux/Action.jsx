
 export const add=(data,id)=>{
    return{type:"ADD", payload:{data,id} }
}

export const edit =(id,update)=>{
    return {type:"EDIT",payload:{id,update}}
}

export const remove=(id)=>{
    return{type:"REMOVE",payload:id}
}


