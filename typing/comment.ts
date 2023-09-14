namespace API { 
    export type CommentListItem = {
        id: string;
        name: string;
        content: string;
        createdDate: Date;
        role: string;
        avatar: string;
    }
}