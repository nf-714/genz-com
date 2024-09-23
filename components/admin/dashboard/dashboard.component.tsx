"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertCircle, DownloadIcon, Settings } from "lucide-react";
import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Mock data (replace with actual data fetching in a real application)
const revenueData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4500 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 5500 },
];

const topProducts = [
  { name: "Product A", sales: 1200, revenue: 24000 },
  { name: "Product B", sales: 800, revenue: 16000 },
  { name: "Product C", sales: 600, revenue: 12000 },
];

const recentOrders = [
  { id: "1234", customer: "John Doe", total: 120, status: "Pending" },
  { id: "1235", customer: "Jane Smith", total: 200, status: "Shipped" },
  { id: "1236", customer: "Bob Johnson", total: 150, status: "Delivered" },
];

const lowStockProducts = [
  { name: "Product X", stock: 5 },
  { name: "Product Y", stock: 3 },
  { name: "Product Z", stock: 2 },
];

export default function DashboardComponent() {
  const [dateRange, setDateRange] = useState("last7Days");
  const [visibleWidgets, setVisibleWidgets] = useState({
    sales: true,
    revenue: true,
    topProducts: true,
    lowStock: true,
    recentOrders: true,
    traffic: true,
  });

  const toggleWidget = (widget: keyof typeof visibleWidgets) => {
    setVisibleWidgets((prev) => ({ ...prev, [widget]: !prev[widget] }));
  };

  const exportData = (format: "pdf" | "excel") => {
    // Implement export functionality
    console.log(`Exporting data as ${format}`);
  };

  const setGoal = (type: "revenue" | "customers" | "sales") => {
    // Implement goal setting functionality
    console.log(`Setting goal for ${type}`);
  };

  const manageNotifications = () => {
    // Implement notification management
    console.log("Managing notifications");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex space-x-4">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="last7Days">Last 7 days</SelectItem>
              <SelectItem value="last30Days">Last 30 days</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => exportData("pdf")}>
            <DownloadIcon className="mr-2 h-4 w-4" /> Export PDF
          </Button>
          <Button onClick={() => exportData("excel")}>
            <DownloadIcon className="mr-2 h-4 w-4" /> Export Excel
          </Button>
          <Button onClick={manageNotifications}>
            <Settings className="mr-2 h-4 w-4" /> Manage Notifications
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleWidgets.sales && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              <Switch
                checked={visibleWidgets.sales}
                onCheckedChange={() => toggleWidget("sales")}
              />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,345</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>

      {visibleWidgets.revenue && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Revenue Over Time
            </CardTitle>
            <Switch
              checked={visibleWidgets.revenue}
              onCheckedChange={() => toggleWidget("revenue")}
            />
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleWidgets.topProducts && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Top Selling Products
              </CardTitle>
              <Switch
                checked={visibleWidgets.topProducts}
                onCheckedChange={() => toggleWidget("topProducts")}
              />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Sales</TableHead>
                    <TableHead>Revenue</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProducts.map((product) => (
                    <TableRow key={product.name}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.sales}</TableCell>
                      <TableCell>${product.revenue}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {visibleWidgets.lowStock && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Low Stock Alerts
              </CardTitle>
              <Switch
                checked={visibleWidgets.lowStock}
                onCheckedChange={() => toggleWidget("lowStock")}
              />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Stock</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lowStockProducts.map((product) => (
                    <TableRow key={product.name}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>
                        <span className="flex items-center text-red-500">
                          <AlertCircle className="mr-2 h-4 w-4" />
                          {product.stock}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>

      {visibleWidgets.recentOrders && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Orders</CardTitle>
            <Switch
              checked={visibleWidgets.recentOrders}
              onCheckedChange={() => toggleWidget("recentOrders")}
            />
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>${order.total}</TableCell>
                    <TableCell>{order.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {visibleWidgets.traffic && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Website Traffic
            </CardTitle>
            <Switch
              checked={visibleWidgets.traffic}
              onCheckedChange={() => toggleWidget("traffic")}
            />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-lg font-semibold">Total Visits</h3>
                <p className="text-2xl font-bold">125,432</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Unique Visitors</h3>
                <p className="text-2xl font-bold">98,765</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Conversion Rate</h3>
                <p className="text-2xl font-bold">3.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Set Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Input placeholder="Revenue Goal" type="number" />
            <Input placeholder="Customer Growth Goal" type="number" />
            <Input placeholder="Product Sales Goal" type="number" />
            <Button onClick={() => setGoal("revenue")}>Set Goals</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
