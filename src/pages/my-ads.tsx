import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface Ad {
  id: string;
  type: "buy" | "sell";
  currency: string;
  rate: string;
  available: string;
  limit: string;
  paymentMethods: string[];
  status: "active" | "inactive";
}

const myAds: Ad[] = [
  {
    id: "1",
    type: "buy",
    currency: "IDR",
    rate: "14,500.0000",
    available: "USD 5,000.00",
    limit: "USD 50.00 - 5,000.00",
    paymentMethods: ["Bank transfer", "PayPal"],
    status: "active",
  },
  {
    id: "2",
    type: "sell",
    currency: "EUR",
    rate: "0.92",
    available: "USD 10,000.00",
    limit: "USD 100.00 - 10,000.00",
    paymentMethods: ["SEPA", "Wise"],
    status: "active",
  },
  {
    id: "3",
    type: "buy",
    currency: "GBP",
    rate: "0.79",
    available: "USD 8,000.00",
    limit: "USD 50.00 - 8,000.00",
    paymentMethods: ["Bank transfer"],
    status: "inactive",
  },
];

export default function MyAds() {
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
              className="text-muted-foreground hover:text-foreground"
            >
              Orders
            </a>
            <a
              href="/my-ads"
              className="text-primary border-b-2 border-primary pb-2"
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

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">My Advertisements</h1>
          <Button className="gap-2 px-6">
            <PlusCircle className="w-4 h-4" />
            Create New Ad
          </Button>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-[1.2fr_1.2fr_1fr_1fr_1.5fr_auto] gap-4 p-4 bg-muted/50 border-b font-medium">
            <div>Type</div>
            <div>Currency/Rate</div>
            <div>Available</div>
            <div>Limit</div>
            <div>Payment Methods</div>
            <div>Status</div>
          </div>

          {myAds.map((ad) => (
            <div
              key={ad.id}
              className="grid grid-cols-[1.2fr_1.2fr_1fr_1fr_1.5fr_auto] gap-4 p-4 border-b items-center hover:bg-muted/30 transition-colors"
            >
              <div>
                <div className="font-medium">
                  {ad.type === "buy" ? "Buy" : "Sell"} USD
                </div>
              </div>
              <div>
                <div className="font-medium">{ad.currency}</div>
                <div className="text-sm text-muted-foreground">{ad.rate}</div>
              </div>
              <div>
                <div className="font-medium">{ad.available}</div>
              </div>
              <div className="text-sm">{ad.limit}</div>
              <div className="text-sm">{ad.paymentMethods.join(", ")}</div>
              <div className="flex gap-2">
                <Button
                  variant={ad.status === "active" ? "default" : "secondary"}
                  size="sm"
                  className="min-w-[80px]"
                >
                  {ad.status === "active" ? "Active" : "Inactive"}
                </Button>
                <Button variant="outline" size="sm" className="min-w-[60px]">
                  Edit
                </Button>
              </div>
            </div>
          ))}

          {myAds.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <img
                src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="No ads"
                className="w-64 h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium mb-2">
                No advertisements yet
              </h3>
              <p className="text-muted-foreground text-center">
                You haven't created any advertisements yet.
                <br />
                Click the "Create New Ad" button to get started.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
