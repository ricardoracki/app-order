export const getStatusMessage = (input: number) => {
  if (input == 0) return "Sem itens a comprar";
  if (input == 1) return "1 ítem a comprar";
  else return `${input} items a comrpar`;
};
