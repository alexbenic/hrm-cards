import data from '../data'

const ApiService = {
  getPeople: () => {
    return new Promise(res => setTimeout(res(data),2000))
  }
}

export default ApiService
