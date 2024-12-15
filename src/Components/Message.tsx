// type MessagePropType = {
//     msg:string;
// }

// const Message = ({msg}:MessagePropType) => {
//   return (
//     <div>
//         <h2>{msg}</h2>
//     </div>
//   )
// }

// export default Message;




type MessagePropType = {
    msg:string;
    val?:number;
}

const Message = (props:MessagePropType) => {
  return (
    <div>
        <h2>{props.msg}</h2>
        <h1>{props.val}</h1>
    </div>
  )
}

export default Message;