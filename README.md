# @bpmn-io/react-form-js

[![CI](https://github.com/bpmn-io/react-form-js/workflows/CI/badge.svg)](https://github.com/bpmn-io/react-form-js/actions?query=workflow%3ACI)

Use [form-js](https://github.com/bpmn-io/form-js) to display forms in a [React](https://reactjs.org/) application.


## Usage

```javascript
import { ReactForm } from '@bpmn-io/react-form-js';

import '@bpmn-io/form-js/dist/assets/form-js.css';
import '@bpmn-io/form-js/dist/assets/flatpickr/light.css';

function App(props) {

  function onShown() {
    console.log('form shown');
  }

  function onError(err) {
    console.log('failed to show form', err);
  }

  function onSubmit(result) {
    console.log('form was submitted', result);
  }

  function onReset() {
    console.log('form was resetted');
  }

  return (
    <ReactForm
      schema={ schema }
      data={ data }
      onShown={ onShown }
      onError={ onError }
      onSubmit={ onSubmit }
      onReset={ onReset }
    />
  );
}
```

## Development

To get the development setup make sure to have [NodeJS](https://nodejs.org/en/download/) installed.
As soon as you are set up, clone the project and execute

```
npm install
npm run all
```

## Example

To run the example, execute `npm run start` and open http://localhost:3000 in your Webbrowser.

## Resources

* [Issues](https://github.com/bpmn-io/react-form-js/issues)
* [Example](./example)


## License

MIT