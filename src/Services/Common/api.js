import axios from "axios";


const ApiConn = axios.create({
  baseURL: "https://pixil3amw2.execute-api.us-east-1.amazonaws.com/",
});


export default ApiConn;