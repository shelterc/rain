import axios from 'axios'

export const getData = async (params: any) => {
  // return axios({
  //   url: 'http://172.16.0.15:5000/api/test/getKey',
  //   params,
  // })
  return await fetch('http://172.16.0.15:5000/api/test/getKey?key=username')
    .then(res => res.json())
    .then(data => data)
}
