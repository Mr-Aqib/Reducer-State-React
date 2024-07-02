import React from 'react'
import { MdAutoDelete } from "react-icons/md";
const TodoList = ({name,id,devl}) => {
  return (
    <>
          <div className="d-flex shadow p-3 rounded-3 flex-row align-items-center justify-content-between">
              <h2>{name}</h2>
              <h5 style={{
                  color: "red",
                  
              }}>{id}</h5>
             
                  <MdAutoDelete  onClick={() => devl(id)} size={25} cursor="Pointer" />
                
    </div>
      </>
  )
}

export default TodoList