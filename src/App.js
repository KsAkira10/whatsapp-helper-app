import React from 'react';
import './App.css';
import Header from './components/Header';
import Frame from './components/Frame';

function App() {
  const [phone, setPhone] = React.useState('');
  const [text, setText] = React.useState('');
  const [showTextarea, setShowTextarea] = React.useState(false);
  const [disabledSubmit, setDisabledSubmit] = React.useState(true);
  const [frame, setFrame] = React.useState(<></>);
  const phoneHandleChange = ({ target }) => {
    const { value } = target;
    const regex = /(0?[1-9]{2})*\D*(9?)\D?(\d{4})+\D?(\d{4})\b/g;
    setPhone(value);

    if (regex.test(value)) {
      setDisabledSubmit(false);
    } else {
      setDisabledSubmit(true);
    }
  };
  const textHandleChange = ({ target }) => {
    const { value } = target;
    setText(value);
  };
  const checkboxHandleChange = ({ target }) => {
    const { checked } = target;
    setShowTextarea(checked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formatted = phone.replace(/[^0-9]/g, '');
    setFrame(<Frame phone={formatted} text={text} />);
  };
  return (
    <>
      <Header />
      <main className="container">
        <article className="article">
          <section>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="form-group text-left">
                  <label htmlFor="phone">número do whatsapp</label>
                  <input className="form-control form-control-lg" type="tel" id="phone" value={phone} onChange={phoneHandleChange} placeholder="11912345678"/>
                </div>

                <div className="form-group text-left">
                  <label htmlFor="text"> 
                    <input id="text" type="checkbox" onChange={checkboxHandleChange}/> mensagem?
                  </label>
                  {showTextarea &&  <textarea className="form-control form-control-lg" id="text" value={text} onChange={textHandleChange} />}
                </div>

                <div className="form-group text-center">
                  <input className="btn btn-primary btn-lg" type="submit" value="ENVIAR MENSAGEM" disabled={disabledSubmit}/>
                </div>
              </form>
            </div>
          </section>
        </article>
        { frame }
      </main>
    </>
  );
}

export default App;
