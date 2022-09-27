import React from 'react'

/* App is parent and PropsFromChildToParent is child so pass props from parent to child */

const PropsFromParentToChild = (props) => {
  return (
    <div>
        <h4>Update Data from Parent to child : {props.updateText}</h4>
    </div>
  )
}

export default PropsFromParentToChild