"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { XIcon } from "lucide-react";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  image: string;
  quantity: number;
  inStock: boolean;
}

export function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Basic Tee",
      color: "Sienna",
      size: "Large",
      price: 32,
      image: "/placeholder.svg?height=80&width=80",
      quantity: 1,
      inStock: true,
    },
    {
      id: 2,
      name: "Basic Tee",
      color: "Black",
      size: "Large",
      price: 32,
      image: "/placeholder.svg?height=80&width=80",
      quantity: 1,
      inStock: false,
    },
    {
      id: 3,
      name: "Nomad Tumbler",
      color: "White",
      size: "",
      price: 35,
      image: "/placeholder.svg?height=80&width=80",
      quantity: 1,
      inStock: true,
    },
  ]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingEstimate = 5;
  const taxEstimate = subtotal * 0.08;
  const orderTotal = subtotal + shippingEstimate + taxEstimate;

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 border-b"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover"
              />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  {item.color} / {item.size}
                </p>
                <p className="font-semibold">${item.price.toFixed(2)}</p>
                {item.inStock ? (
                  <p className="text-sm text-green-600">In stock</p>
                ) : (
                  <p className="text-sm text-gray-500">Ships in 3-4 weeks</p>
                )}
              </div>
              <Select
                value={item.quantity.toString()}
                onValueChange={(value) =>
                  updateQuantity(item.id, parseInt(value))
                }
              >
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <button
                onClick={() => removeItem(item.id)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
        <Card className="lg:w-1/3 lg:h-2/3">
          <CardHeader>
            <CardTitle>Order summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping estimate</span>
                <span>${shippingEstimate.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax estimate</span>
                <span>${taxEstimate.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Order total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
              <Button className="w-full">Checkout</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
