declare namespace API {
    type PhuHuynh = {
        soDienThoai: string;
        tenPhuHuynh: string;
        diaChi: string;
        anhDaiDien: string;
        gioiTinh?: boolean | number;
        matKhau: string;
    }
    type HocVien = {
        hocVienId: number;
        soDienThoai?: string;
        hoVaTen: string;
        ngaySinh: Date;
        gioiTinh?: boolean | number;
    }
    type ChuongTrinhHoc = {
        chuongTrinhHocId: number;
        tenChuongTrinhHoc: string;
        khoaHocId: number;
        moTaChuongTrinh: string;
        moTaChiTiet: string;
        gia: number;
        giaCu: number;
    }
    type QuestionListItem = {
        id: number;
        answerNumber: number;
        title: string;
        content: string;
        type: 'tuluan' | 'donluachon' | 'dungsai' | 'daluachon' | 'baigiang' | 'sapxep',
        suggestion: string;
        isCompleted: boolean;
        result: boolean;
        answers: AnswerListItem[]
    }
    type AnswerListItem = {
        id: number;
        text: string;
        questionId: number;
        yourAnswer: boolean;
        mp3Link: string;
    }
}