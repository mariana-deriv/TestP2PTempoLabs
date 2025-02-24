export default function Profile() {
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
              className="text-muted-foreground hover:text-foreground"
            >
              My ads
            </a>
            <a
              href="/profile"
              className="text-primary border-b-2 border-primary pb-2"
            >
              Profile
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">P2P balance</span>
            <span className="font-medium">USD 1,234.56</span>
          </div>
        </div>

        <div className="grid grid-cols-[300px_1fr] gap-8">
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-medium">
                  J
                </div>
                <div>
                  <h2 className="text-lg font-medium">John_doe</h2>
                  <p className="text-sm text-muted-foreground">
                    Jonathan Nick Does
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Not rated yet</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">100%</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">Joined today</span>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 space-y-4">
              <h3 className="font-medium">Business hours</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">Open now</span>
              </div>
              <p className="text-sm text-muted-foreground">(available 24/7)</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6">
              <h3 className="font-medium mb-4">Daily trade limit</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Buy</div>
                  <div className="h-2 bg-muted rounded-full mb-2">
                    <div className="h-full w-full bg-primary rounded-full"></div>
                  </div>
                  <div className="text-sm">USD 500.00 / 500.00</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Sell</div>
                  <div className="h-2 bg-muted rounded-full mb-2">
                    <div className="h-full w-full bg-primary rounded-full"></div>
                  </div>
                  <div className="text-sm">USD 500.00 / 500.00</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4">
              <div className="bg-card rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">
                  Buy completion (30d)
                </div>
                <div className="text-lg font-medium">100% (50)</div>
              </div>
              <div className="bg-card rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">
                  Sell completion (30d)
                </div>
                <div className="text-lg font-medium">100% (50)</div>
              </div>
              <div className="bg-card rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">
                  Avg. pay time (30d)
                </div>
                <div className="text-lg font-medium">5 min</div>
              </div>
              <div className="bg-card rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">
                  Avg. release time (30d)
                </div>
                <div className="text-lg font-medium">5 min</div>
              </div>
              <div className="bg-card rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">
                  Trade partners
                </div>
                <div className="text-lg font-medium">10</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">
                  Total orders (30d)
                </div>
                <div className="text-lg font-medium">25</div>
              </div>
              <div className="bg-card rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">
                  Total orders (Lifetime)
                </div>
                <div className="text-lg font-medium">50</div>
              </div>
              <div className="bg-card rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">
                  Trade volume (30d)
                </div>
                <div className="text-lg font-medium">USD 500.00</div>
              </div>
              <div className="bg-card rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">
                  Trade volume (Lifetime)
                </div>
                <div className="text-lg font-medium">USD 1,000.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
