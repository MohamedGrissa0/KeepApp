import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes , setnotes] = useState([])    
  function addnote(note) {
     setnotes(prev => {
      return [...prev , note]
     });
  }
  
  function itemd(id)
  {
    setnotes((prev)=>
    {
      return prev.filter((item,index) => {
        return index !== id
      })

    })
  }

  return (
    <div className="all">
      <Header />
      <CreateArea onadd={addnote} />
      {notes.map((note,index) => {
            return ( <Note key={index} id={index} title={note.title} content={note.content} itemdeleation={itemd} />);
      }
          )}
      <Footer />
    </div>
  );
}

export default App;
