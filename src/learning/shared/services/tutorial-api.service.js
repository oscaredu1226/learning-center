import http from "../../../shared/services/http-common.js";

export class TutorialApiService {
    getAll() {
        return http.get('/tutorials');
    }
    getById(id) {
        return http.get(`/tutorials/${id}`);
    }
    create(tutorialResource) {
        return http.post('/tutorials', tutorialResource);
    }
    update(id, tutorialResource) {
        return http.put(`/tutorials/${id}`, tutorialResource);
    }
    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }
    findByTitle(title) {
        return http.get(`/tutorials?title=${title}`);
    }
}