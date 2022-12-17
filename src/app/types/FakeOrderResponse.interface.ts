import {OrderRequestInterface} from "./OrderRequest.interface";

export interface FakeOrderResponseInterface {
  status: number;
  errors: string | null;
  success: string;
  data: OrderRequestInterface
}
