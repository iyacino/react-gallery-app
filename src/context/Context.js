import { createContext, useReducer } from "react"


export const Context = createContext(null)

const initialState = {
    pics: [],
    isVisible: false,
    count: null,
    inputs: {
      title: '',
      file: null,
      path: null
    }
  }
  const handleChange = (state, e) =>{
    if(e.target.name === 'file') {
        return {...state.inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0])}
    }else{
        return {...state.inputs, title: e.target.value}
    }
  }
  const picsReducer = (state, action) =>{
    switch (action.type){
        case'adding-pic': {
            return {
                ...state,
                pics: [state.inputs.path, ...state.pics]
            }
        }
        case'fill-inputs': {
            return {
                ...state,
                inputs: handleChange(state, action.payload.value)
            }
        }
        case'clicking-add': {
            return {
                ...state,
                isVisible: !state.isVisible, 
                inputs: {
                  file: null,
                  path: null, 
                  title: ''
                }
            }
        }
        default: return state
    }
  }

function Provider({children}) {
    const [state, dispatch] = useReducer(picsReducer, initialState)
    return (
      <Context.Provider value={{state, dispatch}}>
        {children}
      </Context.Provider>
    )
}
  
export default Provider
