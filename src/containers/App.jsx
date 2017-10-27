import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ApiService } from '../services/'
import Card from '../components/Card'
import data from '../data'

const updatePeople = dispatch => people => {
  dispatch({
    type: 'UPDATE_PEOPLE',
    payload: people,
  })
}

const deletePerson = dispatch => name => {
  dispatch({
    type: 'REMOVE_PERSON',
    payload: name,
  })
}

const undoChange = dispatch => {
  dispatch({
    type: 'UNDO',
  })
}

const redoChange = dispatch => {
  dispatch({
    type: 'REDO'
  })
}

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
      .then(data => updatePeople(this.props.dispatch)(data))
      .catch(err => console.error(err))
  }

  handleChange(evt) {
    this.setState({
      filter: evt.target.value
    })
  }

  render() {
    const { filter } = this.state
    const { current, dispatch } = this.props

    const onDelete = (name) => deletePerson(dispatch)(name)

    const undo = () => undoChange(dispatch)

    const redo = () => redoChange(dispatch)

    // console.log(data);
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
        <div>
          <button onClick={undo}> Undo &#8635; </button>
          <button onClick={redo}> Redo &#8634; </button>
        </div>
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
