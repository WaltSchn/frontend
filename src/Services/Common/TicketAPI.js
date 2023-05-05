import API from "../Common/api";


const getTicket = () => API.get("/api");
const getTicketID = (id) => API.get("/api/" + id);


const exportedObject = {
  getTicket,
  getTicketID
};
export default exportedObject;