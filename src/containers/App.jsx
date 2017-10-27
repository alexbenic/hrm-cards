import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ApiService } from '../services/'
import * as Action from '../actions'
import Card from '../components/Card'
import data from '../data'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filter: '',
    }
  }

  componentDidMount() {
    ApiService
      .getPeople()
      .then(data => Action.updatePeople(this.props.dispatch)(data))
      .catch(err => console.error(err))
  }

  handleChange(evt) {
    this.setState({
      filter: evt.target.value
    })
  }

  render() {
    const { filter } = this.state
    const { current, archived, dispatch } = this.props

    const onDelete = (name) => Action.remove(dispatch)(name)

    const undo = () => Action.undoChange(dispatch)

    const redo = () => Action.redoChange(dispatch)

    const cancel = () => Action.cancelDelete(dispatch)

    const remove = (name) => Action.remove(dispatch)(name)

    const inputStyle = {
      display: 'block',
      margin: '0 auto',
      width: '400px',
      paddingBottom: '20px',
      display: 'block',
    }

    const filterView = (data, filter) => {
      if (!data) {
        return <div> ¯\_(ツ)_/¯ </div>
      }

      if (!filter) {
        return data.map(item => <Card key={item.Id} {...item} onDelete={onDelete}/>)
      }

      return data
        .filter(item => item.Name.includes(filter))
        .map(item => <Card key={item.Id} {...item} onDelete={onDelete}/>)
    }

    return(
      <div>
        {
          archived
            ? <button onClick={cancel} > Cancel </button>
            : null
        }
        <div style={{ marginBottom: '25px' }}>
          <input
            type="text"
            style={inputStyle}
            value={this.state.filter}
            onChange={evt => this.handleChange(evt)}
            tabIndex={0}
      />
        </div>
          {filterView(current, filter)}
      </div>
    )
  }
}

export default connect(({people}) => people)(App)
