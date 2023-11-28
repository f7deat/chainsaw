import request, { API_HOST } from "./request";

export async function getCurrentUser() {
    return request.get(`user`);
}

export async function getUser(id: string | string[]) {
    return request.get(`user/${id}`);
}

export async function getParent() {
    return request.get(`parent`);
}

export async function register(data: any) {
    return request({
        url: `user/register`,
        data,
        method: 'POST'
    });
}

export async function addStudent(data: API.HocVien) {
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

export async function changePassword(data: any) {
    return request({
        url: `parent/change-password`,
        method: 'POST',
        data
    })
}

export async function updateStudent(data: any) {
    return request({
        url: `student/update`,
        method: 'POST',
        data
    })
}

export async function updateParent(data: any) {
    return request({
        url: `parent/update`,
        method: 'POST',
        data
    })
}

export async function getHelp(data: any) {
    return request({
        url: `student/help`,
        method: 'POST',
        data
    })
}

export async function listUserSelect(params: any) {
    return request({
        url: `user/list-select`,
        params
    })
}

export async function learningHistory(params: any, id?: string | string[]) {
    return request({
        url: `user/learning-history/${id}`,
        params
    })
}
export async function learningResult(id?: string | string[]) {
    return request({
        url: `user/learning-result/${id}`
    })
}

export async function userLogin(data: any) {
    return request({
        url: `login`,
        method: 'POST',
        data
    })
}

export async function listRefer(params: any) {
    return request({
        url: `user/list-refer`,
        params
    })
}

export async function listQuestionHistory(params: any) {
    return request({
        url: `user/question-history-detail`,
        params
    })
}

export async function queryTeachers(params: any) {
    const res = await fetch(`${API_HOST}user/teachers?pageSize=${params.pageSize}&current=${params.current}`);
    return await res.json();
}

export async function queryTeacher(id?: string | string[]) {
    const res = await fetch(`${API_HOST}user/teacher/${id}`);
    return await res.json();
}

export async function queryCountry() {
    return request({
        url: `country/list-select`
    });
}

export async function queryProvince() {
    return request({
        url: `province/list-select`
    });
}

export async function queryDistrict() {
    return request({
        url: `district/list-select`
    });
}

export async function allRole() {
    return request({
        url: `role/all`
    })
}

export async function updateUser(data: any) {
    return request({
        url: `user/update`,
        method: 'POST',
        data
    })
}

export async function changeAvatar(data: any) {
    return request({
        url: `user/change-avatar`,
        method: 'POST',
        data
    })
}

export async function createWithCoupon(data: any) {
    return request({
        url: `user/create-with-coupon`,
        method: 'POST',
        data
    })
}

export async function queryUsers(params: any) {
    return request({
        url: `user/list`,
        method: 'GET',
        params
    })
}

export async function deleteUser(id: string) {
    return request({
        url: `user/delete/${id}`,
        method: 'POST'
    })
}

export async function listRoleByUser(id?: string | string[]) {
    return request(`user/list-role-by-user/${id}`);
}

export async function removeFromRole(roleName: string, id?: string | string[]) {
    return request({
        url: `user/remove-from-role`,
        data: {
            roleName,
            userId: id
        },
        method: 'POST'
    })
}

export async function loginGoogle(credential: string) {
    return request({
        url: `user/google-signin`,
        method: 'POST',
        data: {
            credential
        }
    })
}