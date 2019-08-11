import React from 'react';

function Frame(props) {
  const { phone, text } = props;
  const iframeStyle = {
    border: 'none',
  };

  if (phone.length === 11) {
    return (
      <iframe title="whatsapp" id="launcher" width="0" height="0" style={iframeStyle} src={`whatsapp://send?${phone ? `phone=55${phone}` : ''}${text ? `&text=${text}` : ''}`}></iframe>
    );
  }

  return (<></>);
}

export default Frame;