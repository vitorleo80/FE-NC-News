import axios from 'axios'

const url = "https://norhtcoders-app.herokuapp.com/api"

export async function getData(props){
  console.log(props)
    let {data} = await axios
      .get(`${url}${props}`)
        return data
}

export async function getComments(props){
  let {data} = await axios
    .get(`${url}${props}/comments`)
      return data
}
  


export const voteArticle = async (id, direction) => {
  return await axios
    .put(`${url}/articles/${id}?vote=${direction}`)
}
   
      


export const voteComment = async (id, direction) => {
  return await axios
    .put(`${url}/comments/${id}?vote=${direction}`)
}
  

export const deleteComment = async id => {
  return await axios
    .delete(`${url}/comments/${id}`)
}
  
   
export const postComment = async (articleId, comment) => {
  return await axios
    .post(`${url}/articles/${articleId}/comments`, comment)
}



export function getUsersId() {
  const user = [
    "5b07f205990a3721f68dffb4",
    "tickle122"
  ]
  return user
}
  



export const postArticle = async (title, body, topic, created_by) => {
  const newArticle = {
    title,
    body,
    created_by
  }
  return await axios
    .post(`${url}/topics/${topic}/articles`,newArticle)
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


