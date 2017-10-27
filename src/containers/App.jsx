import React, { Component } from 'react'
import Card from '../components/Card'
import data from '../data'

const ApiService = {
  getData: () => {
    return new Promise(res => setTimeout(res(data),2000))
  },
}

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      data: [],
      filter: '',
    }
  }

  componentDidMount() {
    ApiService
      .getData()
      .then(data => this.setState({ data }))
      .catch(err => console.err(err))
  }

  handleChange(evt) {
    this.setState({
      filter: evt.target.value
    })
  }

  render() {
    const { data, filter } = this.state

    console.log(filter);

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
        return data.map(item => <Card key={item.Name} {...item} />)
      }

      return data
        // .slice(0, 10)   //take 10
        .filter(item => item.Name.includes(filter))
        .map(item => <Card key={item.Name} {...item} />)
    }

    return(
      <div>
        <div style={{ marginBottom: '25px' }}>
          <input
            type="text"
            style={inputStyle}
            value={this.state.filter}
            onChange={evt => this.handleChange(evt)}
            tabIndex={0}
      />
        </div>
          {filterView(data, filter)}
      </div>
    )
  }
}
