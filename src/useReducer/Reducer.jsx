import React, { useReducer, useState } from 'react'
import TodoList from './TodoList'
import { reducer } from './Rreducer'

const Reducer = () => {
    const [name, setName] = useState()
    const iniState =
    {
        todo: [],
        isError: false,
        isSuccess:false,
        isMessage:""
    }
    
    const[state,dispatch] = useReducer(reducer,iniState)
    const handleChange = (e) =>
    {
        e.preventDefault()
        if (!name)
        {
            dispatch({
                type:"NOTNAME"
            })
        }
        else
        {
            dispatch({
                type: "ADDED",
                payload:{name,id:Date.now()}
            })
        }
        setTimeout(() =>
        {
            dispatch({type:"RESET"})
        },2000)
    }
    // Delete Todo
    const deletedTodo = (id) =>
    {
       
        dispatch({
        type: "DELETE_T",
        payload: id
    })
        }
  return (
      <>
          <div className="container">
              <div className="col-lg-6 rounded-4 border border-dark border-1 mx-auto shadow p-3">
                  <h2 className='text-center'>React Hook - Reducer</h2>
                  <p className='text-center'>This is a simple example of using a React Hook called "useReducer" to manage state.</p>
                  <form action="">
                      <label htmlFor="">Enter Todo</label>
                      <input onChange={(e) => setName(e.target.value)} placeholder='Enter todo' type="text" className='form-control' />
                      {
                          state.isError &&
                          <div className="alert my-3 alert-danger" role="alert">
                              {state.isMessage}
                          </div>
                          }
                          {
                          state.isSuccess &&
                          <div className="alert my-3 alert-success" role="alert">
                              Todo added successfully
                          </div>
                      }
                     
                      
                      <button onClick={handleChange} className="btn my-3 btn-success w-50 mx-auto d-block">
                          Add Todo
                      </button>
                  </form>
              </div>
              <div className="col-lg-5 my-3 rounded-4 shadow mx-auto p-3 d-flex flex-column">
                  <h3 className='text-center'>Todo list</h3>
                  {
                      state?.todo?.map((items, index) =>
                      {
                          return <TodoList key={index} {...items}
                              devl={deletedTodo}
                          />
  
                    })
                  }
              </div>
          </div>
      </>
  )
}

export default Reducer