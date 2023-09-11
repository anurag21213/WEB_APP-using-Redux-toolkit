import React from "react";
import { useDispatch } from "react-redux";
import { deleteAlluser } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {

  const dispatch=useDispatch();
  const deletedata=()=>{
    dispatch(deleteAlluser())
  }
  return <div style={{width:'100%',display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
  <button style={{width:'200px',height:'45px',padding:'5px',borderRadius:'5px',backgroundColor:'lightblue',fontSize:'20px',marginTop:'20px',border:'none'}} onClick={()=>{deletedata()}}>
  Delete All User
  </button>
  
  </div>;
};
