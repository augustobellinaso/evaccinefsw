import axios from 'axios';

//URL para utilizar com o Android Studio 10.0.2.2
//url para conexão local: 192.168.0.80
const API_URL = 'http://192.168.0.80:8080/';

class AppDataService{
    cadastrarPessoa(pessoa){
        return axios.post(`${API_URL}pessoas`, pessoa);
    }
}

export default new AppDataService();