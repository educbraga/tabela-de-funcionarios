import type { Employee } from '../types/Employee';

const API_BASE_URL = 'http://localhost:3000';

export const fetchEmployees = async (): Promise<Employee[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/employees`);
    
    if (!response.ok) {
      throw new Error(`Erro HTTP! status: ${response.status}`);
    }
    
    const employees: Employee[] = await response.json();
    return employees;
  } catch (error) {
    console.error('Erro ao buscar funcionários:', error);
    throw error;
  }
};