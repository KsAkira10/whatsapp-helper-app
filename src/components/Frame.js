import React from 'react';

function Frame(props) {
  const { phone, text, host } = props;
  const send = (phone, text) => (`/send?${phone ? `phone=55${phone}` : ''}${text ? `&text=${text}` : ''}`)
  const iframeStyle = {
    border: 'none',
  };

  if (phone.length === 11) {
    return (
      <iframe title="whatsapp" id="luncher" width="0" height="0" style={iframeStyle} src={`${host}${send(phone, text)}`}></iframe>
    );
  }

  return (<></>);
}

export default Frame;