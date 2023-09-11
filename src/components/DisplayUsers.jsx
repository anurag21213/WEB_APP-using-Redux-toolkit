import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaBeer } from 'react-icons/fa';
import { removeuser } from '../store/slices/UserSlice';
const DisplayUsers = () => {

    const user=useSelector((state)=>state.users)

    // console.log(user)

    const dispatch=useDispatch()

    const deleteUser=(id)=>{
        dispatch(removeuser(id))
    }
  return (
    <div className='w-full flex'>
      {
        user.map((user,id)=>(
            <li key={id} style={{height:'45px',display:'flex',alignItems:'center',justifyContent:'space-between'}}><h3>{user}</h3> <button className=' btn-delete' onClick={()=>{deleteUser(id)}}><FaBeer /></button></li>
        ))
      }
    </div>
  )
}

export default DisplayUsers
