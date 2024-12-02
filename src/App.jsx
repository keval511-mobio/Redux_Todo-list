 
import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
 
import { Button  } from 'antd';
function App() {
  const task = useSelector((state)=>state)
  const[name,setName]=useState("")
  const[empId,setEmpId]=useState("")
  const[role,setRole]=useState("")
  const [gender,setGender]=useState("")
  const[editing,setEditing]=useState(null)

  if(editing){

  }
  return (
    <>
     
      <div className='div'>
      <input className='form' type="text" value={name} onChange={(e)=>setName(e.target.value)} name="" placeholder='Name' id="" /> <br /><br />
      <input className='form' type="number"  value={empId} placeholder='EmployeID' onChange={(e)=>setEmpId(e.target.value)}  name="" id="" /><br /><br />
     <select value={role} onChange={(e)=>setRole(e.target.value)} className='form' name="" id="">
      <option value="">SelectRole</option>
      <option value="Admin">Admin</option>
      <option value="User">User</option>
      </select>
<br /><br />
       <input   type="radio" name="gender"  checked={gender==="Male"}  onChange={()=>setGender("Male")} id="male" value="Male" />
          <span>
            <label htmlFor="male">Male</label>
          </span>

          <input checked={gender==="Female"}  onChange={()=>setGender("Female")} type="radio" name="gender" id="female" value="Female" />
          <label htmlFor="female">Female</label>  
          <br /><br />
          <Button type="primary">Submit</Button>
          
      </div>
    </>
  )
}

export default App
