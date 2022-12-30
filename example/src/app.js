import React from 'react';

import ReactDOM from 'react-dom';

import { ReactForm } from '@bpmn-io/react-form-js';

import schema from './form.json';

import '@bpmn-io/form-js/dist/assets/form-js.css';

import '@bpmn-io/form-js/dist/assets/flatpickr/light.css';


function onError(err) {
  console.error('failed to render form', err);
}

function onShown(warnings) {
  console.log('form was shown');

  if (warnings) {
    console.log('import warnings', warnings);
  }
}

function onSubmit(result) {
  console.log('form was submitted', result);
}

function onReset() {
  console.log('form was resetted');
}


function Form() {

  const data = {
    creditor: 'John Doe Company',
    amount: 456,
    invoiceNumber: 'C-123',
    approved: true,
    approvedBy: 'John Doe',
    mailto: [ 'regional-manager', 'approver' ],
    product: 'camunda-cloud',
    queriedDRIs: [
      {
        'label': 'John Doe',
        'value': 'johnDoe'
      },
      {
        'label': 'Anna Bell',
        'value': 'annaBell'
      },
      {
        'label': 'Nico Togin',
        'value': 'incognito'
      }
    ],
    tags: [ 'tag1', 'tag2', 'tag3' ],
    language: 'english'
  };

  return (
    <ReactForm
      schema={ schema }
      data={ data }
      onError={ onError }
      onReset={ onReset }
      onShown={ onShown }
      onSubmit={ onSubmit }
    />
  );
}

ReactDOM.render(
  <Form />,
  document.querySelector('#form')
);