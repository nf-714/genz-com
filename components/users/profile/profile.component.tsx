import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, CircleX } from "lucide-react";

export function Profile() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Profile section */}
        <div className="text-center mb-8">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-gray-600 text-sm sm:text-base">Frequent shopper</p>
        </div>

        <Separator className="my-6" />

        {/* Order History */}
        <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
          Order history
        </CardTitle>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          Check the status of recent orders, manage returns, and discover
          similar products.
        </p>

        <Card className="mb-6">
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold text-sm">Order number</p>
                    <p className="text-gray-600 text-sm">WU88191111</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Date placed</p>
                    <p className="text-gray-600 text-sm">Jul 6, 2021</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Total amount</p>
                    <p className="text-gray-600 text-sm">$160.00</p>
                  </div>
                </div>
                <div className="flex space-x-2 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="flex-1 sm:flex-none text-xs sm:text-sm"
                  >
                    View Order
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 sm:flex-none text-xs sm:text-sm"
                  >
                    View Invoice
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Micro Backpack */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Micro Backpack"
                  className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Micro Backpack</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Are you a minimalist looking for a compact carry option? The
                    Micro Backpack is the perfect size for your essential
                    everyday carry items. Wear it like a backpack or carry it
                    like a satchel for all-day use.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <p className="text-green-600 flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Delivered on July 12, 2021
                    </p>
                    <Button variant="link" className="text-sm p-0">
                      View product
                    </Button>
                    <Button variant="link" className="text-sm p-0">
                      Buy again
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">$70.00</p>
                </div>
              </div>

              <Separator />

              {/* Nomad Shopping Tote */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Nomad Shopping Tote"
                  className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">
                    Nomad Shopping Tote
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    This durable shopping tote is perfect for the world
                    traveler. Its yellow canvas construction is water, fray,
                    tear resistant. The matching handle, backpack straps, and
                    shoulder loops provide multiple carry options for a day out
                    on your next adventure.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <p className="text-green-600 flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Delivered on July 12, 2021
                    </p>
                    <Button variant="link" className="text-sm p-0">
                      View product
                    </Button>
                    <Button variant="link" className="text-sm p-0">
                      Buy again
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">$90.00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold text-sm">Order number</p>
                    <p className="text-gray-600 text-sm">WU88191111</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Date placed</p>
                    <p className="text-gray-600 text-sm">Jul 6, 2021</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Total amount</p>
                    <p className="text-gray-600 text-sm">$160.00</p>
                  </div>
                </div>
                <div className="flex space-x-2 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="flex-1 sm:flex-none text-xs sm:text-sm"
                  >
                    View Order
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 sm:flex-none text-xs sm:text-sm"
                  >
                    View Invoice
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Micro Backpack */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Micro Backpack"
                  className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Micro Backpack</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Are you a minimalist looking for a compact carry option? The
                    Micro Backpack is the perfect size for your essential
                    everyday carry items. Wear it like a backpack or carry it
                    like a satchel for all-day use.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <p className="text-red-600 flex items-center text-sm">
                      <CircleX className="w-4 h-4 mr-1" />
                      Cancelled
                    </p>
                    <Button variant="link" className="text-sm p-0">
                      View product
                    </Button>
                    <Button variant="link" className="text-sm p-0">
                      Buy again
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">$70.00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
