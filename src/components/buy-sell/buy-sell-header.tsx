import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BuySellHeaderProps {
  onSearch: (value: string) => void;
  activeTab: "buy" | "sell";
  onTabChange: (tab: "buy" | "sell") => void;
  onPaymentMethodChange: (method: string) => void;
  onCurrencyChange: (currency: string) => void;
  selectedCurrency: string;
  paymentMethods: string[];
}

export function BuySellHeader({
  onSearch,
  activeTab,
  onTabChange,
  onPaymentMethodChange,
  paymentMethods,
  onCurrencyChange,
  selectedCurrency,
}: BuySellHeaderProps) {
  return (
    <div className="flex items-center gap-4 p-4">
      <div className="flex">
        <button
          onClick={() => onTabChange("buy")}
          className={`px-6 py-2.5 rounded-l-lg font-medium ${activeTab === "buy" ? "bg-primary text-primary-foreground" : "border hover:bg-secondary/80"}`}
        >
          Buy
        </button>
        <button
          onClick={() => onTabChange("sell")}
          className={`px-6 py-2.5 rounded-r-lg font-medium ${activeTab === "sell" ? "bg-primary text-primary-foreground" : "border hover:bg-secondary/80"}`}
        >
          Sell
        </button>
      </div>

      <Select value={selectedCurrency} onValueChange={onCurrencyChange}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="IDR">IDR</SelectItem>
          <SelectItem value="EUR">EUR</SelectItem>
          <SelectItem value="GBP">GBP</SelectItem>
          <SelectItem value="AUD">AUD</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all" onValueChange={onPaymentMethodChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Payment Method" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Payment (All)</SelectItem>
          {paymentMethods.map((method) => (
            <SelectItem key={method} value={method.toLowerCase()}>
              {method}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        placeholder="Enter nickname"
        className="max-w-[300px]"
        onChange={(e) => onSearch(e.target.value)}
      />

      <Select defaultValue="exchange">
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="exchange">Sort by: Exchange rate</SelectItem>
          <SelectItem value="rating">Sort by: Rating</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="filter">
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Filter by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="filter">Filter by</SelectItem>
          <SelectItem value="following">Following</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
