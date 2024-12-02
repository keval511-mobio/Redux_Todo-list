const initialState=[
    {
        
        name:"keval",
        empId:1,
        role:"Admin",
        gender:"Male"
    },
    {
       
        name:"vishal",
        empId:2,
        role:"User",
        gender:"Male"
    },
    {
        
        name:"Kuldeep",
        empId:3,
        role:"User",
        gender:"Male"
    }
    
]

export default function Reducer(state=initialState,action){
switch(action.type){
    case "ADD":
        return[...state,{...action.payload}]

        case "EDIT":
             return state.map((task)=>task.empId === action.payload.update ? {...task,...action.payload.update}:task
             )

             case "REMOVE":
                return state.filter((task)=>task.empId !== action.payload);

                default:
                    return state;
}
}