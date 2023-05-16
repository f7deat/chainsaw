import request from "./request";

export async function getClassroomBySchool(params: any, id?: number) {
    return request(`classroom/list/by-school/${id}`, {
        params
    })
}