import { useState } from 'react'
import './App.css';
import mt from './images/mother_teresa.jpeg';
import sf from './images/st_faustina.jpg';
import st from './images/st_herese.jpeg';
import sk from './images/st_kuriakose.jpeg';
import sa from './images/st_alphonsa.jpeg';
import sdb from './images/st_don_bosco.jpeg';
import sds from './images/st_dominic_savio.jpeg';
import sjp2 from './images/st_john_paul_ii.jpeg';
import sjmv from './images/st_john_maria_vianney.jpeg';
import se from './images/st_evuprasiamma.jpeg';
import sdp from './images/st_devasahayam_pillai.jpeg';
import saa from './images/st_anthony.jpeg';
import sfx from './images/st_francis_xavier.jpg';
import sfa from './images/st_thomas_aquinas.jpg';
import smg from './images/st_maria_goretti.jpg';
const img = [
  {
    src: mt,
    name: "വി. മദർ തെരേസ "
  }, {
    src: sf,
    name: "വി. ഫൗസ്റ്റീന "
  }, {
    src: st,
    name: "വി. കൊച്ചുത്രേസ്യ "
  },{
    src: sk,
    name: "വി. ചാവറ കുര്യാക്കോസ്‌ ഏലിയാസ്"
  }, {
    src: sa,
    name: "വി. അൽഫോൻസാ "
  }, {
    src: sdb,
    name: "വി. ഡോൺ ബോസ്കോ "
  }, {
    src: sds,
    name: "വി. ഡൊമിനിക് സാവിയോ "
  }, {
    src: sjp2,
    name: "വി. ജോൺ പോൾ 2nd "
  }, {
    src: sjmv,
    name: "വി. ജോൺ മരിയ വിയാനി "
  }, {
    src: se,
    name: "വി. ഏവുപ്രാസിയ"
  }, {
    src: sdp,
    name: "വി. ദേവസഹായം പിള്ള "
  }, {
    src: saa,
    name: "വി. അന്തോണീസ്"
  }, {
    src: sfx,
    name: "വി. ഫ്രാൻസിസ് സേവ്യർ"
  }, {
    src: sfa,
    name: "വി. തോമസ് അക്വിനാസ് "
  }, {
    src: smg,
    name: "വി. മരിയ ഗൊരേത്തി "
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

  const selectImg = (index) => {
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
          <button className={index !== i ? 'image-index' : 'image-index selected'} onClick={() => selectImg(i)} >{i + 1}</button>
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
