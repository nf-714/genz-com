"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  image: string;
}

export default function Checkout() {
  const [sameAsShipping, setSameAsShipping] = useState(true);

  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "High Wall Tote",
      color: "White and black",
      size: "15L",
      price: 210,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: 2,
      name: "Halfsize Tote",
      color: "Clay",
      size: "11L",
      price: 330,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: 3,
      name: "Wrap Clutch",
      color: "Light gray",
      size: "0.3L",
      price: 30,
      image: "/placeholder.svg?height=64&width=64",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 25;
  const taxes = subtotal * 0.08;
  const total = subtotal + shipping + taxes;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="lg:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-6">Contact information</h2>
        <div className="mb-4">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" className="mt-1" />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-6">Payment details</h2>
        <div className="mb-4">
          <Label htmlFor="card-number">Card number</Label>
          <Input id="card-number" type="text" className="mt-1" />
        </div>
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <Label htmlFor="expiration">Expiration date (MM/YY)</Label>
            <Input id="expiration" type="text" className="mt-1" />
          </div>
          <div className="w-1/3">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" type="text" className="mt-1" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-6">Shipping address</h2>
        <div className="mb-4">
          <Label htmlFor="address">Address</Label>
          <Input id="address" type="text" className="mt-1" />
        </div>
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <Label htmlFor="city">City</Label>
            <Input id="city" type="text" className="mt-1" />
          </div>
          <div className="flex-1">
            <Label htmlFor="state">State / Province</Label>
            <Input id="state" type="text" className="mt-1" />
          </div>
          <div className="flex-1">
            <Label htmlFor="postal-code">Postal code</Label>
            <Input id="postal-code" type="text" className="mt-1" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-6">Billing information</h2>
        <div className="flex items-center mb-4">
          <Checkbox
            id="same-as-shipping"
            checked={sameAsShipping}
            onCheckedChange={(checked) => setSameAsShipping(checked as boolean)}
          />
          <Label htmlFor="same-as-shipping" className="ml-2">
            Same as shipping information
          </Label>
        </div>

        <Button className="mt-8 w-full">Pay now</Button>
      </div>

      <div className="lg:w-1/2 bg-indigo-700 text-white p-8">
        <h2 className="text-2xl font-bold mb-6">Amount due</h2>
        <p className="text-4xl font-bold mb-8">${total.toFixed(2)}</p>

        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 mr-4 bg-white rounded"
            />
            <div className="flex-1">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm">{item.color}</p>
              <p className="text-sm">{item.size}</p>
            </div>
            <p className="font-bold">${item.price.toFixed(2)}</p>
          </div>
        ))}

        <div className="border-t border-indigo-600 mt-8 pt-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Taxes</span>
            <span>${taxes.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
