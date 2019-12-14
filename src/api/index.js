import axios from 'axios';

export function fetchModel() {
  return axios.get('http://localhost:9001/model')
}

export function fetchWorkflow(id) {
  return axios.get('http://localhost:9001/workflows/' + id)
}
export function createWorkflow(meta) {
  return axios.post('http://localhost:9001/workflows/',meta);
}

