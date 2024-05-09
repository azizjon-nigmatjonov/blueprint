import request from "../../utils/request";

const authService = {
  login: () => request.post("/posts"),
};

export default authService;
