import axios from "axios";

export async function listCourse() {
    return axios.get(`https://apihoconline.getvisa.vn/client/khoahoc/getkhoahocs`);
}