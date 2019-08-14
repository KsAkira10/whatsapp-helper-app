import React from 'react';
import './App.css';
import { isMobile } from './utils';
import Header from './components/Header';
import Frame from './components/Frame';

function App() {
  const [phone, setPhone] = React.useState('');
  const [text, setText] = React.useState('');
  const [generated, setGenerated] = React.useState(false);
  const [showTextarea, setShowTextarea] = React.useState(false);
  const [disabledSubmit, setDisabledSubmit] = React.useState(true);
  const [frame, setFrame] = React.useState(<></>);
  const [waLink, setWaLink] = React.useState('#');
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

    if (!checked) {
      setText('');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formatted = phone.replace(/[^0-9]/g, '');
    if (isMobile()) {
      setFrame(<Frame phone={formatted} text={text} host="whatsapp:/" />);
    } else {
      setFrame(<Frame phone={formatted} text={text} host="https://web.whatsapp.com" />);
    }
    setGenerated(true);
  };

  const handleLinkClick = () => {
    setPhone('');
    setText('');
    setGenerated(false);
    setShowTextarea(false);
    setDisabledSubmit(true);
    setFrame(<></>);
    setWaLink('#');
  }

  React.useEffect(() => {
    const iframe = document.querySelector('#luncher');
    if (iframe) {
      setWaLink(iframe.src);
    } else {
      setWaLink('#');
    }
  }, [frame]);

  return (
    <>
      <Header />
      <main className="container">
        <article className="article">
          <section>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="form-group text-left">
                  <label htmlFor="phone">Número do WhatsApp</label>
                  <input className="form-control form-control-lg" type="tel" id="phone" value={phone} onChange={phoneHandleChange} placeholder="Ex.: 11912345678" />
                </div>

                <div className="form-group text-left">
                  <div className="custom-control custom-checkbox">
                    <input id="text" type="checkbox" className="custom-control-input" onChange={checkboxHandleChange} />
                    <label htmlFor="text" className="custom-control-label">Mensagem?</label>
                  </div>
                  {showTextarea && <textarea className="form-control form-control-lg" id="text" value={text} onChange={textHandleChange} placeholder="Ex.: Olá! Tudo bem?" minLength="2" maxLength="50" />}
                </div>

                <div className="form-group text-center">
                  {generated ? <a href={waLink} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>ENVIAR MENSAGEM</a> : <input className="btn btn-primary btn-lg" type="submit" value="GERAR LINK" disabled={disabledSubmit} />}
                </div>
              </form>
            </div>
          </section>
        </article>
        {frame}
      </main>
    </>
  );
}

export default App;
