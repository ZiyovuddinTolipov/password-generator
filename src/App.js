import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='generator'>
          <h2 className='generator__header'>
            Password Generator
          </h2>
          <div className='generator__password'>
            <h3> Password </h3>
            <button className='copy__btn'>
              <i className='far fa-clipboard'></i>
            </button>
          </div>
          <div className='form-group'>
            <label htmlFor='password-strenght'>Password Strenght</label>
            <input
              type="number"
              id='password-strenght'
              name='password-strenght'
              max="20"
              min="10" />
          </div>

          <div className='form-group'>
            <label htmlFor='uppercase-letters'>Include Uppercase Letters</label>
            <input
              type="checkbox"
              id='uppercase-letters'
              name='uppercase-letters'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='lowercase-letters'>Include Lowercase Letters</label>
            <input
              type="checkbox"
              id='lowercase-letters'
              name='lowercase-letters'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
