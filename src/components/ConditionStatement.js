import React from 'react'

const ConditionStatement = (props) => {
    return(
        <>
            {  props.status == "valid" && <div> <h4>conditional  : Status is valid </h4></div>}
         </>
    )
}


export default ConditionStatement