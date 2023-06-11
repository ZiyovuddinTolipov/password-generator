import { useState } from 'react';
import './scss/App.scss';

function App() {
  const [password,setPassword] = useState('');
  const [passwordlenght,setPasswordlenght] = useState(20);
  const [includeUppercase,setIncludeUppercase] = useState(false);
  const [includeLowercase,setIncludeLowercase] = useState(false);
  const [includeNumbers,setIncludeNumbers] = useState(false);
  const [includeSymbols,setIncludeSymbols] = useState(false);

  const handleGeneratePassword = (e) => {
    
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='generator'>
          <h2 className='generator__header'>
            Password Generator
          </h2>
          <div className='generator__password'>
            <h3> {password} </h3>
            <button className='copy__btn'>
              <i className='far fa-clipboard'></i>
            </button>
          </div>
          <div className='form-group'>
            <label htmlFor='password-strenght'>Password length</label>
            <input
              defaultValue={passwordlenght}
              onChange={(e) => setPasswordlenght(e.target.value)}
              type="number"
              id='password-strenght'
              name='password-strenght'
              max="20"
              min="10" />
          </div>

          <div className='form-group'>
            <label htmlFor='uppercase-letters'>Include Uppercase Letters</label>
            <input
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              type="checkbox"
              id='uppercase-letters'
              name='uppercase-letters'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='lowercase-letters'>Include Lowercase Letters</label>
            <input
              checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
              type="checkbox"
              id='lowercase-letters'
              name='lowercase-letters'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='include-numbers'>Include  Numbers</label>
            <input
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              type="checkbox"
              id='include-numbers'
              name='include-numbers'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='include-symbols'>Include  Symbols</label>
            <input
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              type="checkbox"
              id='include-symbols'
              name='include-symbols'
            />
          </div>

          <button onClick={handleGeneratePassword} className='generator__btn'>Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
