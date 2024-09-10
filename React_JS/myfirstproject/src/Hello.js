function Hello(props){
    const isDisabled = !props.isDisabled;
    return(
      <>
      {!isDisabled && <h1>enabled</h1>}
      {isDisabled && <h1>disabled</h1>}
      </>
    )
  }

export default Hello;

// function Hello(props){
//   const isDisabled = props.isDisabled;
//   if(isDisabled){
//     return <h1>disabled</h1>
//   }
//   else{
//     return <h1>enabled</h1>
//   }
// }