import request from "./request";

export async function getStudent() {
    return request.get(`student`);
}

export async function getParent() {
    return request.get(`student/parent`);
}

export async function createParent(data: API.PhuHuynh) {
    return request({
        url: `student/register`,
        data,
        method: 'POST'
    });
}

export async function createStudent(data: API.HocVien) {
    return request({
        url: `student/add`,
        method: 'POST',
        data
    })
}

export async function login(data: any) {
    return request({
        url: `auth/password-sign-in`,
        method: 'POST',
        data
    })
}