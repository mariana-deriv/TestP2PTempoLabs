import { AdvertiserRow } from "@/components/buy-sell/advertiser-row";
import { BuySellHeader } from "@/components/buy-sell/buy-sell-header";

const advertisers = [
  // IDR Advertisers

  {
    name: "Mariana Rueda",
    isFollowing: true,
    rating: 4.9,
    orders: 1243,
    completion: 99,
    rate: "IDR 14,500.0000",
    orderLimit: "USD 50.00 - 5,000.00",
    paymentMethods: "Bank transfer, PayPal",
    waitTime: "5 min",
  },
  {
    name: "Pavitra Yoganathan",
    rating: 4.8,
    orders: 892,
    completion: 98,
    rate: "IDR 14,550.0000",
    orderLimit: "USD 100.00 - 10,000.00",
    paymentMethods: "Bank transfer, Wise",
    waitTime: "10 min",
  },
  {
    name: "Alex Chen",
    isFollowing: true,
    rating: 4.7,
    orders: 567,
    completion: 97,
    rate: "IDR 14,600.0000",
    orderLimit: "USD 20.00 - 2,000.00",
    paymentMethods: "Bank transfer, Neteller",
    waitTime: "15 min",
  },
  {
    name: "Sarah Johnson",
    rating: 4.6,
    orders: 432,
    completion: 96,
    rate: "IDR 14,650.0000",
    orderLimit: "USD 30.00 - 3,000.00",
    paymentMethods: "PayPal, Wise",
    waitTime: "8 min",
  },
  {
    name: "Mohammed Al-Rashid",
    isFollowing: true,
    rating: 4.5,
    orders: 789,
    completion: 95,
    rate: "IDR 14,700.0000",
    orderLimit: "USD 200.00 - 20,000.00",
    paymentMethods: "Bank transfer, PayPal, Wise",
    waitTime: "12 min",
  },
  {
    name: "Elena Popov",
    rating: 4.4,
    orders: 234,
    completion: 94,
    rate: "IDR 14,750.0000",
    orderLimit: "USD 40.00 - 4,000.00",
    paymentMethods: "Bank transfer, Neteller",
    waitTime: "20 min",
  },
  {
    name: "Carlos Silva",
    rating: 4.3,
    orders: 345,
    completion: 93,
    rate: "IDR 14,800.0000",
    orderLimit: "USD 25.00 - 2,500.00",
    paymentMethods: "PayPal, Wise, Neteller",
    waitTime: "15 min",
  },
  {
    name: "Lisa Wong",
    isFollowing: true,
    rating: 4.2,
    orders: 678,
    completion: 92,
    rate: "IDR 14,850.0000",
    orderLimit: "USD 150.00 - 15,000.00",
    paymentMethods: "Bank transfer, PayPal",
    waitTime: "7 min",
  },
  // EUR Advertisers
  {
    name: "Hans Schmidt",
    isFollowing: true,
    rating: 4.9,
    orders: 2341,
    completion: 99,
    rate: "EUR 0.92",
    orderLimit: "USD 100.00 - 10,000.00",
    paymentMethods: "SEPA, Wise",
    waitTime: "5 min",
  },
  {
    name: "Marie Dubois",
    rating: 4.7,
    orders: 1567,
    completion: 98,
    rate: "EUR 0.93",
    orderLimit: "USD 50.00 - 5,000.00",
    paymentMethods: "SEPA, Revolut",
    waitTime: "10 min",
  },
  {
    name: "Luigi Romano",
    rating: 4.6,
    orders: 890,
    completion: 97,
    rate: "EUR 0.94",
    orderLimit: "USD 200.00 - 20,000.00",
    paymentMethods: "SEPA, PayPal",
    waitTime: "15 min",
  },
  // GBP Advertisers
  {
    name: "James Wilson",
    isFollowing: true,
    rating: 4.8,
    orders: 1876,
    completion: 99,
    rate: "GBP 0.79",
    orderLimit: "USD 100.00 - 15,000.00",
    paymentMethods: "Bank transfer, Wise",
    waitTime: "7 min",
  },
  {
    name: "Emma Thompson",
    rating: 4.7,
    orders: 923,
    completion: 97,
    rate: "GBP 0.80",
    orderLimit: "USD 50.00 - 8,000.00",
    paymentMethods: "Bank transfer, Revolut",
    waitTime: "12 min",
  },
  // AUD Advertisers
  {
    name: "Steve Cooper",
    rating: 4.6,
    orders: 654,
    completion: 96,
    rate: "AUD 1.52",
    orderLimit: "USD 50.00 - 5,000.00",
    paymentMethods: "PayID, Bank transfer",
    waitTime: "10 min",
  },
  {
    name: "Jessica Lee",
    isFollowing: true,
    rating: 4.5,
    orders: 432,
    completion: 95,
    rate: "AUD 1.53",
    orderLimit: "USD 100.00 - 10,000.00",
    paymentMethods: "PayID, Wise",
    waitTime: "15 min",
  },
];

import { useState } from "react";

export default function BuySell() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("all");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("IDR");

  // Extract unique payment methods from advertisers
  const uniquePaymentMethods = Array.from(
    new Set(
      advertisers.flatMap(
        (advertiser) => advertiser.paymentMethods?.split(", ") || [],
      ),
    ),
  ).sort();

  const filteredAdvertisers = advertisers.filter((advertiser) => {
    const nameMatch = advertiser.name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const paymentMethodMatch =
      selectedPaymentMethod === "all" ||
      advertiser.paymentMethods
        ?.toLowerCase()
        .includes(selectedPaymentMethod.toLowerCase());

    const currencyMatch = advertiser.rate?.startsWith(selectedCurrency);
    return nameMatch && paymentMethodMatch && currencyMatch;
  });
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center mb-8">
          <nav className="flex gap-8">
            <a
              href="/buy-sell"
              className="text-primary border-b-2 border-primary pb-2"
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

        <BuySellHeader
          onSearch={setSearchQuery}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onPaymentMethodChange={setSelectedPaymentMethod}
          paymentMethods={uniquePaymentMethods}
          onCurrencyChange={setSelectedCurrency}
          selectedCurrency={selectedCurrency}
        />

        <div className="mt-8 border rounded-lg overflow-hidden">
          <div className="grid grid-cols-[2fr_1fr_1fr_1.5fr_auto] gap-4 p-4 bg-muted/50 border-b">
            <div>Advertisers</div>
            <div>Rates</div>
            <div>Order limits</div>
            <div>Payment methods</div>
            <div>Action</div>
          </div>
          {filteredAdvertisers.length > 0 ? (
            filteredAdvertisers.map((advertiser, index) => (
              <AdvertiserRow key={index} {...advertiser} mode={activeTab} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <img
                src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="No results"
                className="w-64 h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium mb-2">No advertisers found</h3>
              <p className="text-muted-foreground text-center">
                We couldn't find any advertisers matching your search criteria.
                <br />
                Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
