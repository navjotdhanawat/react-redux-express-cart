import axios from 'axios';
const server_url = 'http://localhost:4000';//"http://urkirana.progfeel.co.in";

class ItemApi {
    static getItems() {
        return fetch(server_url + '/getProducts/1').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getItemById(id) {
        return fetch(server_url + '/getProduct/' + id).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getHomeItems() {
        return fetch(server_url + '/getHomeProducts').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getItemsByPage(page) {
        return fetch(server_url + '/getProducts/' + page).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static searchItems(keyword) {
        return fetch(server_url + '/searchProducts/' + keyword).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}
export default ItemApi;