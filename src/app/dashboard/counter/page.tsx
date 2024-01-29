

import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Shopping cart',
 description: 'Shopping cart using useState',
};

export default function CounterPage() {



  return (
    <div className=" flex flex-col items-center justify-center w-full h-full">
      <span>Carrito de compras</span>
     <CartCounter value={ 20 } />
    </div>
  );
}