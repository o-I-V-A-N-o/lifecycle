import React, {useState, useEffect} from 'react'
import Clock from './Clock'

function Watches(props){
  const [dateNow, setDate] = useState(getTime())

  useEffect( () => {
    setInterval(()=>{
      setDate(getTime())
    },1000)
  }, [])

  const [sities, setSity] = useState([{
    sity: 'Your sity',
    timeoffset: new Date().getTimezoneOffset()/60
  }])

  const handleSubmit = evt => {
    evt.preventDefault();
    
    setSity([...sities, form])
  }

  const[form, setForm]= useState({
    sity: '',
    timeoffset: null
  });

  const handleNameChangeSity = evt => {
    setForm(prevForm => ({...prevForm, sity: evt.target.value}));
  }

  const handleNameChangeTimeoffset = evt => {
    let value;
    if (evt.target.value == ''){
      value = evt.target.value;
    } else {
      
      value = parseFloat(evt.target.value);
    }
    
    setForm(prevForm => ({...prevForm, timeoffset: value}));
  }

  const removeClick = (index) => {
    setSity([...sities.slice(0, index), ...sities.slice(index + 1)]);
  }

  function getTime(){
    var date = new Date(),
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    console.log('11')
    return {hours, minutes, seconds}
  }

  return(
    <div className="progress-bar">
      <form onSubmit={handleSubmit}>
        <input id="sity" type="text" name="sity" onChange={handleNameChangeSity}/>
        <input id="timeoffset" type="text" name="timeoffset" onChange={handleNameChangeTimeoffset}/>
        <button>ОК</button>
      </form>
      {sities.map((item, index) => 
        <div display="inline-block;">
          <Clock date={dateNow} sity={item} />
          <button onClick={() => removeClick(index)}>X</button>
        </div>
      )}
    </div>
  );
}

export default Watches;