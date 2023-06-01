import React, {useState} from 'react';
import axios from 'axios';
import './formcss.css';

const FormTest = () => {
    
    const [state, setState] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        let file = e.target.file;
        setState(file)
    }

const handleSubmit =  async () => {
    const upload = await axios.post('https://perisferiastore-production.up.railway.app/', state)
}

  return (
    <div className='divClass'>
        <div className='divDos'>
      <form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" onChange={handleChange}/>
  <br/>
  <button type='submit' onClick={handleSubmit}>mandar</button>
    </form>
    </div>
    </div>
  )
}

export default FormTest
