import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function MessageBox(props) {
  return (
    <div>
      <Alert variant={props.variant || 'danger'}>{props.children}</Alert>
    </div>
  );
}
