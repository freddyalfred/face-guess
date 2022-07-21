import { useState } from 'react'
import './App.css';
import mt from './images/mt.jpg';
import hawking from './images/hawking.jpg';
import indira from './images/indira.jpg';
import musk from './images/musk.jpeg';
import obama from './images/obama.jpg';
import rohith from './images/rohith.jpg';
import spb from './images/spb.jpg';
import vidhya from './images/vidya.jpg';
const img = [
  {
    src: mt,
    name: "M.T Vasudevan Nair"
  }, {
    src: hawking,
    name: "Stephen Hawking"
  }, {
    src: indira,
    name: "Indira Gandhi"
  }, {
    src: musk,
    name: "Elon Musk"
  }, {
    src: obama,
    name: "Barack Obama"
  }, {
    src: rohith,
    name: "Rohit Sharma"
  }, {
    src: spb,
    name: "S. P. Balasubrahmanyam"
  }, {
    src: vidhya,
    name: "Vidya Balan"
  }
]

export const App = () => {
  const [data, setData] = useState([...Array(64)])
  const [imageData, setImageData] = useState(img[0])
  const [index, setIndex] = useState(0)
  const [showImageName, setShowImageName] = useState(false)
  const updateData = (e, i) => {
    e.preventDefault();
    let tempData = [...data]
    tempData[i] = 'true'
    setData(tempData)
  }

  const show = () => {
    let tempData = [...data]
    data.map((val, i) => {
      tempData[i] = 'true'
    })
    setData(tempData)
    setShowImageName(true)
  }

  const hide = () => {
    let tempData = [...data]
    data.map((val, i) => {
      tempData[i] = ''
    })
    setData(tempData)
    setShowImageName(false)
  }

  const selectImg = (index) =>{
    hide()
    setImageData(img[index])
      setIndex(index)
  }

  const next = () => {
    let tempData = [...Array(64)]
    setData(tempData)
    if (img.length <= index + 1) {
      setIndex(0)
      setImageData(img[0])
    } else {
      setImageData(img[index + 1])
      setIndex(setIndex => setIndex + 1)
    }
    setShowImageName(false)
  }

  return (
    <div className="App">
      <div><span className='header'>Guess Who.....!</span></div>
      <div id="container">

        <div id="navi" className="grid-container">
          {data.map((x, i) =>
            <div key={i} className={(data[i] == 'true') ? 'active grid-item' : '1 grid-item'} onClick={(e) => updateData(e, i)}>{i}</div>
          )}
        </div>
        <div id="infoi">
          <img src={imageData.src} />
        </div>
      </div>
      <div className="name">{(showImageName) ? imageData.name : '**************'}</div>
      <div className='button-container'>
      {img.map((x, i) =>
      <button className={index !==i ? 'image-index' : 'image-index selected'} onClick={()=>selectImg(i)} >{i+1}</button>
      )}
      </div>
      <div className='button-container'>
        <button className="show" onClick={show}>Show</button>
        <button className="hide" onClick={hide}>Hide</button>
        <button className="next" onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default App;
