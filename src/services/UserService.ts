import { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import User from '@interfaces/User';


import { api } from './api';

interface ILoginRequest {
    email: string;
    password: string;
}

interface ILoginResponse {
    token: string;
    user: User;
}

export default class UserService {
    static async login(data: ILoginRequest): Promise<ILoginResponse> {
        const response: AxiosResponse<ILoginResponse> = await api.post(
            '/users/authenticate',
            data
        );

        await AsyncStorage.setItem('@app:token', response.data.token);
        await AsyncStorage.setItem('@app:useId', response.data.user.id);
        await AsyncStorage.setItem('@app:userName', response.data.user.name);
        await AsyncStorage.setItem('@app:userAge', response.data.user.age);
        await AsyncStorage.setItem('@app:userRole', response.data.user.parental_role);
        await AsyncStorage.setItem('@app:userDescription', response.data.user.description || "null");
        await AsyncStorage.setItem('@app:userPhone', response.data.user.phone);
        await AsyncStorage.setItem('@app:userEmail', response.data.user.email);
        await AsyncStorage.setItem('@app:userTopics', response.data.user.topics || "null");

        return response.data;
    }
}
