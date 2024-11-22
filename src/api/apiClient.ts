import axiosInstance from './axiosConfig';
import {ApiResponse, User} from '../types/apiTypes';

const apiClient = {
  getUsers: async (): Promise<ApiResponse<User[]>> => {
    const response = await axiosInstance.get<ApiResponse<User[]>>('/users');
    return response.data;
  },

  getUserById: async (userId: number): Promise<ApiResponse<User>> => {
    const response = await axiosInstance.get<ApiResponse<User>>(
      `/users/${userId}`,
    );
    return response.data;
  },
};

export default apiClient;
