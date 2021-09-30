import http from "./http-common";
import authHeader from "./auth-header";
import Axios from "axios";
const baseURL= 'http://localhost:8080'

class FileUploadService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization":authHeader()
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return Axios.get(baseURL +"/files",{ headers: authHeader() });
  }
}

export default new FileUploadService();