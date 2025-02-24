import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface AdvertiserRowProps {
  name?: string;
  isFollowing?: boolean;
  rating?: number;
  orders?: number;
  completion?: number;
  rate?: string;
  orderLimit?: string;
  paymentMethods?: string;
  waitTime?: string;
  mode?: "buy" | "sell";
}

export function AdvertiserRow({
  name,
  isFollowing,
  rating,
  orders,
  completion,
  rate,
  orderLimit,
  paymentMethods,
  waitTime,
  mode = "buy",
}: AdvertiserRowProps) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1.5fr_auto] gap-4 p-4 border-b items-center">
      <div className="flex items-center gap-4">
        <Avatar>
          <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-primary-foreground">
            {name?.[0] || "U"}
          </div>
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium">{name}</span>
            {isFollowing && (
              <Badge variant="outline" className="text-xs">
                Following
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>⭐ {rating}</span>
            <span>•</span>
            <span>{orders} orders</span>
            <span>•</span>
            <span>{completion}% completion</span>
          </div>
        </div>
      </div>
      <div>
        <div className="font-medium">{rate}</div>
        <div className="text-sm text-muted-foreground">{waitTime}</div>
      </div>
      <div>
        <div className="text-sm">{orderLimit}</div>
      </div>
      <div>
        <div className="text-sm">{paymentMethods}</div>
      </div>
      <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 whitespace-nowrap font-medium">
        {mode === "buy" ? "Buy USD" : "Sell USD"}
      </button>
    </div>
  );
}
