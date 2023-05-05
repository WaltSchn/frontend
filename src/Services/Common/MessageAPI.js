import API from "../Common/api";

const getMessageID = (id) => API.get("/api/mensagem/" + id);
const postMessage = (id, newMessage) => API.post("/api/mensagem/" + id, { Mensagem: newMessage });

const exportedMessage = {
    getMessageID,
    postMessage
};
export default exportedMessage;