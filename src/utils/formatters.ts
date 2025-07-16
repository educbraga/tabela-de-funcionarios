export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

export const formatPhone = (phone: string): string => {
  // Remove todos os caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Formato de telefone brasileiro: +55 (11) 99999-9999
  if (cleanPhone.length === 13 && cleanPhone.startsWith('55')) {
    const countryCode = cleanPhone.slice(0, 2);
    const areaCode = cleanPhone.slice(2, 4);
    const firstPart = cleanPhone.slice(4, 9);
    const secondPart = cleanPhone.slice(9, 13);
    return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
  }
  
  // Fallback para outros formatos
  return phone;
};