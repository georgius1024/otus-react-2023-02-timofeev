import axios from 'axios'

const mathJsApi = 'https://api.mathjs.org/v4'


function buildUrl(expression: string): string {
  return `${mathJsApi}/?expr=${encodeURIComponent(expression)}`
}

export default function evaluate(expression: string): Promise<string> {
  return axios.get(buildUrl(expression)).then(({ data }) => (data))
}

