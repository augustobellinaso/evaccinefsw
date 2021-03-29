import axios from 'axios';

//URL para utilizar com o Android Studio
const API_URL = 'http://10.0.2.2:8080/';

class AppDataService{
    cadastrarPessoa(pessoa){
        return axios.post(`${API_URL}pessoas`, pessoa);
    }
}

export default new AppDataService();