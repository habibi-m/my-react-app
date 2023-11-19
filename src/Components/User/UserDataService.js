import http from '../../Helpers/HttpHelper'

class UserDataService {
    getAll() {
        return http.get("/users");
    }

    get(id) {
        return http.get(`/users/${id}`);
    }

    create(user) {
        return http.post("/users", user);
    }

    update(id, user) {
        return http.put(`/users/${id}`, user);
    }

    delete(id) {
        return http.delete(`/users/${id}`);
    }
}

export default new UserDataService();
