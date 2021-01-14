import { useState } from "react";
import "./App.css";
import { TextField } from "@material-ui/core";
import notes from "./notes.js";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  function handleChange1(e) {
    setValue1(e.target.value);
  }

  function handleChange2(e) {
    setValue2(e.target.value);
  }
  return (
    <div className="App">
      <TextField
        placeholder="Start typing here.."
        variant="outlined"
        value={value1}
        onChange={handleChange1}
        multiline
      />
      <input type="text" value={value2} onChange={handleChange2} />
      {notes.map((note) => {
        return <div className="note">{note.body}</div>;
      })}
    </div>
  );
}

export default App;
