import axios from 'axios';
import { loginData } from '../types';

const USER_API_URL = 'https://api.marktube.tv/v1/me';

export default class UserSerVice {
  public static async login(reqData: loginData): Promise<string> {
    const { data } = await axios.post(USER_API_URL, {
      email: 'mark@test.com',
      password: 'fastcampus',
    });
    return data?.token;
  }
  public static async logout(token: string): Promise<void> {
    await axios.delete(USER_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
