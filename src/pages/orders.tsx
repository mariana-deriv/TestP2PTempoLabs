import { cn } from "@/lib/utils";

interface Order {
  id: string;
  type: "Buy" | "Sell";
  counterparty: string;
  status:
    | "Complete payment"
    | "Awaiting payment"
    | "Waiting seller's confirmation"
    | "Confirm payment"
    | "Under dispute";
  time: string;
  send: string;
  receive: string;
}

const orders: Order[] = [
  {
    id: "00000001",
    type: "Buy",
    counterparty: "Bard",
    status: "Complete payment",
    time: "00:59:59",
    send: "IDR 14,500.0000",
    receive: "USD 10.00",
  },
  {
    id: "00000001",
    type: "Sell",
    counterparty: "Carl",
    status: "Awaiting payment",
    time: "00:59:59",
    send: "IDR 14,500.0000",
    receive: "USD 10.00",
  },
  {
    id: "00000001",
    type: "Buy",
    counterparty: "Anny",
    status: "Waiting seller's confirmation",
    time: "00:59:59",
    send: "IDR 14,500.0000",
    receive: "USD 10.00",
  },
  {
    id: "00000001",
    type: "Sell",
    counterparty: "Hala",
    status: "Confirm payment",
    time: "00:59:59",
    send: "IDR 14,500.0000",
    receive: "USD 10.00",
  },
  {
    id: "00000001",
    type: "Buy",
    counterparty: "x_user1990",
    status: "Waiting seller's confirmation",
    time: "00:00:00",
    send: "IDR 14,500.0000",
    receive: "USD 10.00",
  },
  {
    id: "00000001",
    type: "Sell",
    counterparty: "Michelin",
    status: "Under dispute",
    time: "Ended",
    send: "IDR 14,500.0000",
    receive: "USD 10.00",
  },
  {
    id: "00000001",
    type: "Sell",
    counterparty: "meya_user",
    status: "Under dispute",
    time: "Ended",
    send: "USD 10.00 - 100.00",
    receive: "USD 10.00",
  },
];

export default function Orders() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center mb-8">
          <nav className="flex gap-8">
            <a
              href="/buy-sell"
              className="text-muted-foreground hover:text-foreground"
            >
              Buy/Sell
            </a>
            <a
              href="/orders"
              className="text-primary border-b-2 border-primary pb-2"
            >
              Orders
            </a>
            <a
              href="/my-ads"
              className="text-muted-foreground hover:text-foreground"
            >
              My ads
            </a>
            <a
              href="/profile"
              className="text-muted-foreground hover:text-foreground"
            >
              Profile
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">P2P balance</span>
            <span className="font-medium">USD 1,234.56</span>
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-sm overflow-hidden">
          <div className="flex gap-1 p-1 bg-muted/50">
            <button className="px-4 py-2 rounded-lg bg-background font-medium">
              Active orders
            </button>
            <button className="px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted/80">
              Past orders
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">Order ID</th>
                  <th className="text-left p-4 font-medium">Counterparty</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Time</th>
                  <th className="text-left p-4 font-medium">Send</th>
                  <th className="text-left p-4 font-medium">Receive</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-0 hover:bg-muted/30"
                  >
                    <td className="p-4">
                      <span
                        className={cn(
                          "font-medium",
                          order.type === "Buy"
                            ? "text-[#1DB954]"
                            : "text-[#F6465D]",
                        )}
                      >
                        {order.type}
                      </span>{" "}
                      {order.id}
                    </td>
                    <td className="p-4">{order.counterparty}</td>
                    <td className="p-4">
                      <span
                        className={cn("px-3 py-1 rounded-full text-sm", {
                          "bg-blue-100 text-blue-700":
                            order.status === "Complete payment" ||
                            order.status === "Confirm payment",
                          "bg-orange-100 text-orange-700":
                            order.status === "Awaiting payment" ||
                            order.status === "Waiting seller's confirmation",
                          "bg-red-100 text-red-700":
                            order.status === "Under dispute",
                        })}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {order.time}
                      </span>
                    </td>
                    <td className="p-4">{order.send}</td>
                    <td className="p-4">{order.receive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
