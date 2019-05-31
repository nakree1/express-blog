import React from 'react';
import axios from 'axios'

class Form extends React.Component {
  state = {
    email: '',
    name: '',
    isFetching: false
  }

  handleChange = ({field, value}) => {
    this.setState({
      [field]: value
    })
  }

  // handleSend = () => {
  //   this.setState({isFetching: true}, () => {
  //     axios.post()
  //   })
  // }



  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-6 my-5 mx-auto">
            <div className="alert alert-secondary">
              <p className="h2">
                Create user
              </p>
              <div className="form-group">
                <label htmlFor="emailInput">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={({currentTarget}) => this.handleChange({ field: 'email',  value: currentTarget.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nameInput">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                  onChange={({currentTarget}) => this.handleChange({ field: 'name',  value: currentTarget.value})}
                />
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-primary btn-block" onClick={this.handleSend}>Create</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Form;
