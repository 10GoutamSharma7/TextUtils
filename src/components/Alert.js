import React from 'react';
import '../styles/Alert.css';

export default function Alert(props) {
  return (
    <div style={{ height: '60px', marginTop: '1rem' }}>
      {props.alert && (
        <div className={`custom-alert ${props.alert.type}`} role="alert">
          <strong>{props.alert.type.toUpperCase()}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
