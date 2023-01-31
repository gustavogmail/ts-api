export interface User {
    "id": number,
    "firstName": string,
    "lastName": string,
    "age": number
}

export interface UsersStoreModel {
    users: User[],
    current_user: User
}