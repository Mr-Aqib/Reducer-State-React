import React, { useReducer, useState } from 'react'

const Reducer = () => {
    const [name, setName] = useState([])
    const iniState =
    {
        todo: [],
        isError: false,
        isSuccess:false,
        isMessage:""
    }
    const reducer = (state,action) =>
    {
        if (action.type == "NOTNAME")
        {
            return {
                ...state,
                isSuccess: false,
                isError: true,
                isMessage: "Name is required.",
                

            }
        }
        if (action.type == "ADDED")
        {
            return {
                ...state,
                isSuccess: true,
                isError: false,
                isMessage: "Todo added successfully.",
                todo: [
                    ...state.todo,action.payload

                ]
               
            }
        }
        if (action.type = "RESET")
        {
            return {
                ...state,
                isSuccess: false,
                isError: false,
                
            }
            }
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
                payload:name
            })
        }
        setTimeout(() =>
        {
            dispatch({type:"RESET"})
        },2000)
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
                          <ul>
                          {
                          state.todo.map((item,index) =>
                          <li key={index}>{item}</li>)
                          }
                          </ul>
                          {
                          state.todo.length === 0 &&
                          <p className='text-center'>No Todos found.</p>
                          }
                      
                      <button onClick={handleChange} className="btn my-3 btn-success w-50 mx-auto d-block">
                          Add Todo
                      </button>
                  </form>
              </div>
          </div>
      </>
  )
}

export default Reducer