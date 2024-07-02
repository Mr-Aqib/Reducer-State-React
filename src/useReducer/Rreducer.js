export const reducer = (state,action) =>
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
        if (action.type == "ADDED") {
            return {
                ...state,
                isSuccess: true,
                isError: false,
                isMessage: "Todo added successfully.",
                todo: [
                    ...state.todo, action.payload

                ]
               
            
            }

        }
        if (action.type == "RESET")
        {
            return {
                ...state,
                isSuccess: false,
                isError: false,
                
            }
        }
        if (action.type == "DELETE_T")
        {
            
            return{
                ...state,
                isSuccess: true,
                isError: false,
                isMessage:"deleted successfully",
                todo: state.todo.filter((items, index) =>
                {
                    return items.id !== action.payload
                })
               
            }
            }
        }