// Importa fotos dos funcionários
import user1 from '../assets/photos/user-1.png';
import user2 from '../assets/photos/user-2.png';
import user3 from '../assets/photos/user-3.png';
import user4 from '../assets/photos/user-4.png';
import user5 from '../assets/photos/user-5.png';
import user6 from '../assets/photos/user-6.png';
import user7 from '../assets/photos/user-7.png';
import user8 from '../assets/photos/user-8.png';
import user10 from '../assets/photos/user-10.png';
import userPlaceholder from '../assets/photos/user-placeholder.jpg';

// Mapeia IDs dos funcionários para fotos locais
const photoMap: Record<number, string> = {
  1: user1,
  2: user2,
  3: user3,
  4: user4,
  5: user5,
  6: user6,
  7: user7,
  8: user8,
  10: user10, // Nota: ID 9 não existe no db.json
};

export const getEmployeePhoto = (employeeId: number): string => {
  return photoMap[employeeId] || userPlaceholder; // fallback para userPlaceholder se ID não encontrado
};