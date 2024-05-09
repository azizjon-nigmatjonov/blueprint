import request from "../../utils/request";

const exampleService = {
  getList: () => request.get("/posts"),
  createPost: (data) => request.post('/posts', data)
};

export default exampleService;
