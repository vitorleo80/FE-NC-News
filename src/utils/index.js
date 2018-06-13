import axios from 'axios'

async function fetch(endPoint){
    
    let {data} = await axios.get(endPoint)
    return data
}



export default fetch