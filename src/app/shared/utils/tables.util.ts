export const formaterSorN = (value: string): string => {
    if (value === 'N') {
      value = 'NÃO';
    } else {
      value = 'SIM';
    }
  
    return value;
  }
  