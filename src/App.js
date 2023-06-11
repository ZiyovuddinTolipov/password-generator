import { useState } from 'react';
import './scss/App.scss';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters
} from './characters'


function App() {
  const [password, setPassword] = useState('');
  const [passwordLenght, setPasswordLenght] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);


  const handleGeneratePassword = (e) => {
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols){
      toast.error(`You must Select atleast one option`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    let characterList = ``;
    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters;
    }
    if (includeUppercase) {
      characterList = characterList + upperCaseLetters;
    }
    if (includeNumbers) {
      characterList = characterList + numbers;
    }
    if (includeSymbols) {
      characterList = characterList + specialCharacters;
    }
    // console.log(characterList);
    setPassword(createPassword(characterList));
  }
  const createPassword = (characterList) => {
    // console.log(characterList);
    let password = ``;
    const characterListLenght = characterList.length;
    // console.log(characterListLenght);

    for (let i = 0; i < passwordLenght; i++) {
      const characterIndex = Math.round(Math.random() * characterListLenght);
      // console.log(characterIndex);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  }

  const handleCopy = async (e) => {
    try {
      await navigator.clipboard.writeText(password);
      toast.info('🦄Text copied to clipboard!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // console.log('Text copied to clipboard.');
    } catch (error) {
      toast.error(`Error : ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      // console.error('Failed to copy text:', error);
    }
  };

  const handleCopyPassword = (e) => {
    handleCopy();
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
            <button className='copy__btn' onClick={handleCopyPassword}>
              <i className='far fa-clipboard'></i>
            </button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password-strenght'>Password length</label>
            <input
              defaultValue={passwordLenght}
              onChange={(e) => setPasswordLenght(e.target.value)}
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
