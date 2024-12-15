

// const Button = (props:{label:string}) => {
//   return (
//     <button>
//         {props.label}
//     </button>
//   )
// }



// export default Button



import { MouseEventHandler } from "react"

const Button = ({label,fn}:{label:string,fn:MouseEventHandler<HTMLButtonElement>}) => {
    return (
      <button onClick={fn}>
          {label}
      </button>
    )
  }
  
  export default Button