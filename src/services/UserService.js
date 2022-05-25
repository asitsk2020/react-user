import axios from 'axios'

const USER_TASK_REST_API_URL = 'http://localhost:9000/restapi/users/';

class UserService {
  getAllUserTasks() {
    return axios.get(USER_TASK_REST_API_URL);
  }

  saveUserTask(task) {
    return axios.post(USER_TASK_REST_API_URL, task);
  }

  getUserTaskById(id) {
    return axios.get(USER_TASK_REST_API_URL + id);
  }

  deleteTask(taskId) {
    return axios.delete(USER_TASK_REST_API_URL + taskId);
  }
}

export default new UserService();