import React, { useState } from 'react'

/* App is parent and PropsFromChildToParent is child so pass props from child to parent */
const PropsFromChildToParent = (props) => {


  const [text,setText] = useState('');  

  const onHandler = (event) => {
    setText(event.target.value);
  }

  const onChangeText =() => { 
    text.length > 0 ? 
    props.onchangeTextData(text.toUpperCase()):
    props.onchangeTextData("Please write some data");
  }

  return (
    <div>
        <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" placeholder="Text" value={text} onChange={onHandler} />
                </div>
                <button type="submit" className="btn btn-primary mb-2" onClick={onChangeText} >Text to uppercase</button>
        </form> 
    </div>
  )
}

export default PropsFromChildToParent