import React, { Fragment } from 'react';
import axios from 'axios';

class GetArticlesForm extends React.Component {
  state = {
    id: '',
    data: [],
    isFetching: false
  };

  handleChange = ({ field, value }) => {
    this.setState({
      [field]: value
    });
  };

  handleSend = () => {
    this.setState({ isFetching: true }, () => {
      const { id } = this.state;
      axios
        .get(`/api/articles/${id}`)
        .then((res) => {
          this.setState({
            isFetching: false,
            data: res.data,
            id: ''
          });
        })
        .catch((err) => {
          this.setState({
            isFetching: false,
            data: []
          });
        });
    });
  };

  render() {
    const { isFetching, id, data } = this.state;

    const articles = data.map((article) => (
      <li className="list-group-item">
        id: <span className="text-secondary">{article.id}</span>
        <h5>{article.title}</h5>
        <p className="h6 text-secondary">{article.content}</p>
      </li>
    ));

    return (
      <div className="row">
        <div className="col-6 my-5 mx-auto">
          <div className="alert alert-secondary">
            <p className="h2">Get Articles By User Id</p>
            <ul className="list-group">{articles}</ul>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="userIdInput"
                placeholder="Enter id"
                disabled={isFetching}
                value={id}
                onChange={({ currentTarget }) =>
                  this.handleChange({ field: 'id', value: currentTarget.value })
                }
              />
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={this.handleSend}
                disabled={isFetching}
              >
                {isFetching ? (
                  <Fragment>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Fetchung
                  </Fragment>
                ) : (
                  'Get Articles'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetArticlesForm;
