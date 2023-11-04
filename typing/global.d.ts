namespace API {
    type AppContext = {
        user: API.User
    }
    interface ListResult<T> {
        data: T[];
        total: number;
    }
}