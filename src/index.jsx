import React from 'react';

import { Form } from '@bpmn-io/form-js';

/**
 * @typedef { import('@bpmn-io/form-js/dist/types').Data} Data
 * @typedef { import('@bpmn-io/form-js/dist/types').Errors} Errors
 * @typedef { import('@bpmn-io/form-js/dist/types').Schema} Schema
 */

/**
 * @component
 */
export class ReactForm extends React.Component {

  /**
   * @param {Object} props
   * @param {Data} props.data
   * @param {Schema} props.schema
   * @param {(error: Error) => {}} props.onError
   * @param {(warnings: Array<any>) => {}} props.onShown
   * @param {(result: { data: Data, errors: Errors }) => {}} props.onSubmit
   * @param {() => {}} props.onReset
   */
  constructor(props) {
    super(props);

    this.containerRef = React.createRef();
  }

  componentDidMount() {
    const {
      data,
      schema
    } = this.props;

    const container = this.containerRef.current;

    this.form = new Form({ container });

    this.form.on('submit', this.handleSubmit);
    this.form.on('reset', this.handleReset);

    if (schema) {
      return this.displayForm(schema, data);
    }
  }

  componentWillUnmount() {
    this.form.destroy();
  }

  componentDidUpdate(prevProps) {
    const {
      data,
      schema: currentSchema
    } = this.props;

    const previousSchema = prevProps.schema;

    if (currentSchema && currentSchema !== previousSchema) {
      return this.displayForm(currentSchema, data);
    }
  }

  displayForm(schema, data) {
    try {
      const { warnings } = this.form.importSchema(schema, data);
      this.handleShown(warnings)
    } catch(err) {
      this.handleError(err);
    }
  }

  handleError(err) {
    const { onError } = this.props;

    if (onError) {
      onError(err);
    }
  }

  handleShown(warnings) {
    const { onShown } = this.props;

    if (onShown) {
      onShown(warnings);
    }
  }

  handleSubmit = (result) => {
    const { onSubmit } = this.props;

    if (onSubmit) {
      onSubmit(result);
    }
  }

  handleReset = () => {
    const { onReset } = this.props;

    if (onReset) {
      onReset();
    }
  }

  render() {
    return (
      <div className="react-form-container" ref={ this.containerRef }></div>
    );
  }
}
