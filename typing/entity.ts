declare namespace API {
    export type PhuHuynh = {
        soDienThoai: string;
        tenPhuHuynh: string;
        diaChi: string;
        anhDaiDien: string;
        gioiTinh?: boolean | number;
        matKhau: string;
    }
    export type HocVien = {
        hocVienId: number;
        soDienThoai?: string;
        hoVaTen: string;
        ngaySinh: Date;
        gioiTinh?: boolean | number;
    }

    export type ChuongTrinhHoc = {
        chuongTrinhHocId: number;
        tenChuongTrinhHoc: string;
        khoaHocId: number;
        moTaChuongTrinh: string;
        moTaChiTiet: string;
        gia: number;
        giaCu: number;
    }
    export type QuestionListItem = {
        id: number;
        answerNumber: number;
        title: string;
        content: string;
        type: 'tuluan' | 'donluachon' | 'dungsai' | 'daluachon',
        suggestion: string;
        isCompleted: boolean;
        result: boolean;
        answers: AnswerListItem[]
    }
    export type AnswerListItem = {
        id: number;
        text: string;
        questionId: number;
    }
}