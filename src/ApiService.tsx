import axios from 'axios';
import { ColorsData } from './Types';

const API_URL = 'https://api.prolook.com/api';

export const getColors = async (): Promise<ColorsData[]> => {
  try {
    const response = await axios.get<ColorsData[]>(`${API_URL}/colors`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Colors:', error);
    throw error;
  }
};
