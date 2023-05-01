import request from "./request";

export async function listCourse() {
    return request.get(`khoahoc/getkhoahocs`);
}

export async function queryKhoaHoc(id: string | string[]) {
    return request.get(`khoahoc/${id}`);
}

export async function chuongTrinhHoc(id?: string | string[]) {
    return request.get(`khoahoc/danh-sach-chuong-trinh-hoc/${id}`)
}

export async function getBaiGiang(id?: string | string[]) {
    return request.get(`khoahoc/getbaigiangs/${id}`)
}

export async function listHighLight(slug: string) {
    return request.get(`khoahoc/high-light/${slug}`)
}

export async function listQuestion(id?: string | string[]) {
    return request({
        url: `cauhoi/getdanhsach`,
        method: 'POST',
        data: {
            BaiGiangID: id
        }
    })
}

export async function checkAnswer(questionId: string, answerId: string, answerText: string) {
    return request({
        url: 'cauhoi/checkanswer',
        method: 'POST',
        data: {
            CauHoiID: questionId,
            DapAnID: answerId,
            CauTraLoi: answerText
        }
    })
}

export async function isBought(id?: string | string[]) {
    return request({
        url: `khoahoc/checkmuakhoahoc`,
        method: 'POST',
        data: {
            ChuongTrinhHocID: id
        }
    })
}

export async function getMyCourse() {
    return request.get(`khoahoc/my-course`);
}

export async function listClassroom() {
    return request.get(`classroom/list`);
}

export async function listSubject() {
    return request.get(`subject/list`)
}