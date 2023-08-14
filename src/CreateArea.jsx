import React , {useState} from "react";

function CreateArea(props) {

 const [note,setnote] = useState({
    title :"",
    content : ""
 })

 function change(event)
 {
    const {name,value} = event.target
   setnote(prev => {
    return {...prev,
            [name] : value
    }
   })
    }

 

 function add(event)
 {
    props.onadd(note)
    setnote({
        title:"",
        content:""
    })
    event.preventDefault()



 }


  return (
    <div>
      <form>
        <input onChange={change} name="title" placeholder="Title" value={note.title}  />
        <textarea onChange={change} name="content" placeholder="Take a note..." rows="3" value={note.content}   />
        <button onClick={add}>Add</button>
      </form>
    </div>
  );

  }
export default CreateArea;
