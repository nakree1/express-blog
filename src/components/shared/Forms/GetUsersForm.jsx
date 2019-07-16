import React, { Fragment } from 'react';
import axios from 'axios'

class GetUsersForm extends React.Component {
  state = {
    data: [],
    isFetching: false
  }

  handleSend = () => {
    this.setState({isFetching: true}, () => {
      axios.get('/api/users')
        .then(res => {
          this.setState({
            isFetching: false,
            data: res.data
          })
        })
        .catch(err => {
          this.setState({
            isFetching: false,
            data: []
          })
        })
    })
  }


  render() {
    const {isFetching, data } = this.state;

    const users = data.map(user => (
      <li className="list-group-item">
        id: <span className="text-secondary">{user.id}</span>
        <h5>
          {user.name}
        </h5>
        <p className="h6 text-secondary">
          {user.email}
        </p>
      </li>
    ))

    return (
      <main className="container">
        <div className="row">
          <div className="col-6 my-5 mx-auto">
            <div className="alert alert-secondary">
              <p className="h2">
                Get users
              </p>

              <ul className="list-group">
                {users}
              </ul>


              <div className="form-group">
                <button type="button" className="btn btn-primary btn-block" onClick={this.handleSend} disabled={isFetching}>
                  {isFetching ?  (
                    <Fragment>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                      Fetching...
                    </Fragment>
                  ) : 'Get Users'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default GetUsersForm;
