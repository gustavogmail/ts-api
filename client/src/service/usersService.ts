import Api from './Api';

export default {
    async getAllUsers() {
        var response = await Api().get('users')
        return response.data;
    },
    async getParticularUser(user_id: number) {
        var response = await Api().get('users/' + user_id)
        return response.data;
    }
}