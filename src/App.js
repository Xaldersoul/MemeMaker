import './App.css';
import React, { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [upper, setUpper] = useState('');
  const [bottom, setBottom] = useState('');
  const [image, setImage] = useState('meme1');

  const getInput1 = (event) => {
    setUpper(event.target.value)
  }

  const getInput2 = (event) => {
    setBottom(event.target.value)
  }

  const getImage = (event) => {
    setImage(event.target.value)
  }

  const download = (event) => {
    html2canvas(document.querySelector("#memes")).then(canvas => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  }

  return (
    <div className='page' >
      <div className="App">
        <div>
          <select onChange={getImage}>
            <option value="meme1" key="">Stonks</option>
            <option value="meme2" key="">Pacha</option>
            <option value="meme3" key="">Uncanny</option>
            <option value="meme4" key="">Holding</option>
          </select> <br/>

          <input type="text" onChange={getInput1} placeholder='Upper text' /> <br/>
          <input type="text" onChange={getInput2} placeholder='Bottom text' /> <br/>
          <button onClick={download}>Exportar</button> <br/>
        </div>

        <div className='Meme' >
          <div className='Canvas' id='memes'>
            <span>{upper}</span>
            <span>{bottom}</span>
            <img className='Image' src={`/images/${image}.jpg`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
