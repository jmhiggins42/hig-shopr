import React from 'react';
import EightBitBtn from './EightBitBtn';

const systemList = ['Wii', 'Wii U', '3DS', 'Switch', 'Gamecube'].sort(
  (a, b) => a.toLowerCase() - b.toLowerCase()
);

class LibraryForm extends React.Component {
  constructor(props) {
    super(props);

    const formData = this.initializeForm(props.formData);

    this.state = {
      formData,
      errorMessages: {},
      hasBeenValidated: false
    };

    this.formEl = React.createRef();
  }

  initializeForm = formData => ({
    title: formData.title || '',
    status: formData.status || '',
    system: formData.system || '',
    tags: formData.tags || []
  });

  componentWillReceiveProps(newProps) {
    const formData = this.initializeForm(newProps.formData);
    this.setState({ formData, hasBeenValidated: false });
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      const formData = {
        ...prevState.formData,
        [name]: value
      };
      return { formData };
    }, this.validateForm);
  };

  submitHandler = e => {
    e.preventDefault();

    if (this.formEl.current.checkValidity()) {
      const game = { _id: this.props.formData._id || null, ...this.state.formData };
      this.props.onSubmit(game);
    }

    this.setState({ hasBeenValidated: true }, this.validateForm);
  };

  validateForm = () => {
    /* No custom validation yet */
    this.setErrorMessages();
  };

  setErrorMessages = () => {
    const errorMessages = {};
    const formEl = this.formEl.current;

    if (formEl) {
      const formLen = formEl.length;

      for (let i = 0; i < formLen; i++) {
        const input = formEl[i];
        if (input.name) {
          errorMessages[input.name] = input.validationMessage;
        }
      }

      this.setState({ errorMessages });
    }
  };

  renderClassNames = inputName =>
    this.state.hasBeenValidated && this.state.errorMessages[inputName]
      ? 'form-control is-invalid'
      : 'form-control is-valid';

  renderErrorMsgs = inputName =>
    this.state.hasBeenValidated && this.state.errorMessages[inputName] ? (
      <div className="invalid-feedback">{this.state.errorMessages[inputName]}</div>
    ) : null;

  render() {
    const { formData: propsFormData } = this.props;
    const { formData } = this.state;

    return (
      <div className="col-sm-6">
        <form ref={this.formEl} onSubmit={e => this.submitHandler(e)} noValidate>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              className={this.renderClassNames('title')}
              value={formData.title}
              onChange={this.onChange}
              required
            />
            {this.renderErrorMsgs('title')}
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <input
              id="status"
              name="status"
              type="text"
              className={this.renderClassNames('status')}
              value={formData.status}
              onChange={this.onChange}
              required
            />
            {this.renderErrorMsgs('status')}
          </div>
          <div className="form-group">
            <label htmlFor="system">System</label>
            <select
              id="system"
              name="system"
              className={this.renderClassNames('system')}
              value={formData.system}
              onChange={this.onChange}
              required
            >
              <option value="">Choose a system</option>
              {systemList.sort((a, b) => a.toLowerCase() - b.toLowerCase()).map(system => (
                <option key={system} value={system}>
                  {system}
                </option>
              ))}
            </select>
            {this.renderErrorMsgs('system')}
          </div>
          <div className="form-group">
            <EightBitBtn
              type="submit"
              classType="main"
              clickHandler={e => this.submitHandler.bind(e)}
            >
              {propsFormData._id ? 'update' : 'submit'}
            </EightBitBtn>
            <EightBitBtn classType="danger" clickHandler={this.props.onCancel}>
              cancel
            </EightBitBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default LibraryForm;
