// import React from "react"
// import Child from "./Child"
// class Parent extends React.Component{
//     obj = {
//         username : "Veerapavani"
//     }
//     render()
//     {
//         return (
//             <>
//               <Child name = {this.obj.username}/>

//             </>
//         )
//     }
// }
// export default Parent
import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div>
      <Child name = "sahithi" />
    </div>
  )
}

export default Parent
