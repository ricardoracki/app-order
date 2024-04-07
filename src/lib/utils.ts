import { OrderListItem } from "@/storage/storage";

const alphabeticalOrdering = (a: string, b: string) => a.localeCompare(b);

export const sortOrders = (data: OrderListItem[]) => {
  const _d = (data = data.sort((a, b) => alphabeticalOrdering(a.tag, b.tag)));
  const unmarked = _d.filter((d) => !(d as OrderListItem).mark);
  const marked = _d.filter((d) => (d as OrderListItem).mark);

  return [...unmarked, ...marked];
};
