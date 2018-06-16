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
  



export const postArticle = (title, body, topic, created_by) => {
  console.log('posting.....')
  const newArticle = {
    title,
    body,
    created_by
  }
  return axios.post(
    `${url}/topics/${topic}/articles`,
    newArticle
  ).then(response => {
    console.log(response)
  })
}


export const UsersFromArticles = articles => {
  
  const user = articles.reduce((acc, article) => {
    if (acc[article.created_by] === undefined) {
      acc[article.created_by] = 1
    } else {
      acc[article.created_by]++
    }
      return acc
  }, {})


  const topArr = Object.entries(user);
  return topArr
 }

 export const formatData = obj => {

  let newArr = Object.keys(obj)
  let result = newArr.map(key=> {
    let ret = {}
    ret[key] = obj[key];
      return ret;
  })
  return result
}
