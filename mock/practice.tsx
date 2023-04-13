export const practice: any = [
    {
        name: "Luyện tập - Tìm x (tiết 1)",
        data: [
            {
                text: "Tìm x biết: x + 12 = 20 -7",
                type: 'SINGLE_TEXT_INPUT',
                answer: "1",
                answered: false,
                correct: false
            },
            {
                text: "Tìm x biết: x + 42 = 91",
                type: "SINGLE_TEXT_INPUT",
                answer: "49",
                answered: false,
                correct: false
            }
        ]
    }
]

export type PracticeType = {
    name: string;
    data: PracticeContentType;
}

export type PracticeContentType = {
    text: string;
    type: 'SINGLE_TEXT_INPUT' | 'MULTI_TEXT_INPUT',
    answer: any;
}