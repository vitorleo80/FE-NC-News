import axios from 'axios'

const url = "https://norhtcoders-app.herokuapp.com/api"

export async function getData(props){
    let {data} = await axios.get(`${url}${props}`)
    return data
}


export  const voteArticle = (id, direction) => {
   
    return axios
      .put(`${url}/articles/${id}?vote=${direction}`)
      .then(res => {
        return res.data
      })
}


export  const voteComment = (id, direction) => {
  return axios
    .put(`${url}/comments/${id}?vote=${direction}`)
    .then(res => {
      return res.data
    })
}

export const deleteComment = id => {
  console.log(id)
  return axios.delete(
    `${url}/comments/${id}`)
    .then(res => {
      return res.data
    })
}
   
export const postComment = (articleId, comment) => {
  return axios.post(`${url}/articles/${articleId}/comments`, comment).then(response => {
    console.log(response)
  })
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getUsersId() {
  const users = [
    "5b07f205990a3721f68dffb4",
    "5b07f205990a3721f68dffb5",
    "5b07f205990a3721f68dffb6",
    "5b07f205990a3721f68dffb7",
    "5b07f205990a3721f68dffb8",
    "5b07f205990a3721f68dffb9"
  ]
  return `${rando(users)}`
}
  



