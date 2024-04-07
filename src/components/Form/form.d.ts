import { type Order } from "@/storage/storage";
export interface FormProps {
  handleSubmit: (data: Order) => void;
}
