import React,{useReducer} from 'react'
import { createContext } from 'react'
function reducing(state, action){
     console.log(state,action)
     if(action.state=="dark"){
        return  state = "black"
     }else{
          state = "white"
     }

// switch(action.state){
//      case "dark": {return "black"}
// }

}
 export const themeContext = createContext()

 export const ThemeProvider =({children})=>{

     const [state, dispatch] = useReducer(reducing, "white")



      return <themeContext.Provider value={{state,dispatch,reducing}}> {children} </themeContext.Provider>
 }