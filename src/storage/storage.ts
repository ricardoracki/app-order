import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sortOrders } from "@/lib/utils";

export type Order = {
  item: string;
  amount: string;
  unit: string;
  tag: string;
};

export type OrderListItem = Order & {
  mark?: boolean;
};

type OrderState = {
  data: OrderListItem[] | null;
  create: (data: Order) => void;
  toggleMark: (order: Order) => void;
  remove: (order: Order) => void;
  removeAll: () => void;
};

export const useOrdersStorage = create(
  persist<OrderState>(
    (set) => ({
      data: null,
      create: (data: Order) => {
        set((state) =>
          !!state?.data
            ? { data: sortOrders([...state.data, data]) }
            : { data: [data] }
        );
      },
      toggleMark: (order: Order) => {
        set((state) => ({
          data: sortOrders(
            state.data!.map((a) => (a == order ? { ...a, mark: !a.mark } : a))
          ),
        }));
      },
      remove: (order: Order) => {
        set((state) =>
          !!state?.data
            ? { data: state.data.filter((d) => d !== order) }
            : { data: [] }
        );
      },
      removeAll: () => {
        set({ data: null });
      },
    }),
    {
      name: "order-list:orders",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
