import { RefreshCw, Package, CheckCircle, XCircle, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container py-8 lg:py-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
            <RefreshCw className="w-8 h-8 text-background" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Return Policy</h1>
          <p className="text-muted-foreground">
            Simple, hassle-free returns within 30 days
          </p>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">30-Day Window</h3>
            <p className="text-sm text-muted-foreground">
              Returns accepted within 30 days of delivery
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Free Returns</h3>
            <p className="text-sm text-muted-foreground">
              Free return shipping for exchanges
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Easy Process</h3>
            <p className="text-sm text-muted-foreground">
              Initiate returns online in seconds
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
          {/* Return Window */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Return Window</h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer a 30-day return window from the date of delivery. Items must
              be returned in their original condition with all tags attached. The
              item must be unworn, unwashed, and undamaged.
            </p>
          </section>

          <Separator />

          {/* Eligible Items */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold">Eligible for Return</h2>
            </div>
            
            <ul className="space-y-3 text-muted-foreground list-disc list-inside">
              <li>Regular-priced items in original condition</li>
              <li>Items with original tags still attached</li>
              <li>Unworn and unwashed items</li>
              <li>Items in original packaging</li>
              <li>Sale items (for store credit or exchange only)</li>
            </ul>
          </section>

          <Separator />

          {/* Non-Returnable Items */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold">Non-Returnable Items</h2>
            </div>
            
            <ul className="space-y-3 text-muted-foreground list-disc list-inside">
              <li>Final sale items (marked as "Final Sale" at checkout)</li>
              <li>Intimate apparel and swimwear (for hygiene reasons)</li>
              <li>Customized or personalized items</li>
              <li>Items without original tags</li>
              <li>Worn, washed, or damaged items</li>
              <li>Gift cards</li>
            </ul>
          </section>

          <Separator />

          {/* How to Return */}
          <section>
            <h2 className="text-2xl font-bold mb-4">How to Return an Item</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Initiate Return Online</h3>
                  <p className="text-sm text-muted-foreground">
                    Log into your account, go to Orders, and select the item you wish
                    to return. Click "Return Item" and select your reason for return.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Print Return Label</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll receive a prepaid return shipping label via email within 24
                    hours. Print the label and attach it to your package.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Ship Your Return</h3>
                  <p className="text-sm text-muted-foreground">
                    Drop off your package at any authorized shipping location. Keep
                    your tracking number for reference.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Receive Refund</h3>
                  <p className="text-sm text-muted-foreground">
                    Once we receive and inspect your return, your refund will be
                    processed within 5-7 business days.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button asChild>
                <a href="/orders">View My Orders</a>
              </Button>
            </div>
          </section>

          <Separator />

          {/* Refund Options */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Refund Options</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <div className="bg-secondary/50 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  Original Payment Method
                </h3>
                <p className="text-sm leading-relaxed">
                  Refunds are issued to your original payment method. A small
                  processing fee may apply. Refunds typically appear in your account
                  within 3-5 business days after processing.
                </p>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Store Credit</h3>
                <p className="text-sm leading-relaxed">
                  Choose store credit for an immediate refund with no processing fees.
                  Store credit never expires and can be used on any purchase.
                </p>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Exchange</h3>
                <p className="text-sm leading-relaxed">
                  Exchanges are always free! We'll ship your new item as soon as we
                  receive your return. Different size? Different color? No problem!
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Exchanges */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Exchanges</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Exchanges are completely free, including return and new item shipping.
              When initiating your return, simply select "Exchange" and choose your
              new item (different size, color, or style).
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We'll ship your new item within 48 hours of receiving your return. If
              there's a price difference, we'll either refund or charge the
              difference accordingly.
            </p>
          </section>

          <Separator />

          {/* Damaged or Defective Items */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Damaged or Defective Items</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you receive a damaged or defective item, please contact us within 7
              days of delivery. We'll provide a prepaid return label and send a
              replacement immediately at no cost to you.
            </p>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Important:</span> Please
                take photos of any damage or defects to help us improve our quality
                control process.
              </p>
            </div>
          </section>

          <Separator />

          {/* Return Shipping Costs */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Return Shipping Costs</h2>
            
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                <span className="font-medium text-foreground">Free:</span> Exchanges
                and store credit returns
              </p>
              <p className="leading-relaxed">
                <span className="font-medium text-foreground">$7.99 Fee:</span> Refunds
                to original payment method
              </p>
              <p className="leading-relaxed">
                <span className="font-medium text-foreground">Always Free:</span>{" "}
                Damaged or defective items
              </p>
            </div>
          </section>

          <Separator />

          {/* International Returns */}
          <section>
            <h2 className="text-2xl font-bold mb-4">International Returns</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              International orders follow the same 30-day return policy. Return
              shipping costs are the responsibility of the customer. We recommend
              using a tracked shipping method. Customs fees and duties are
              non-refundable.
            </p>
          </section>

          <Separator />

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Have questions about returns? Our customer service team is here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" asChild>
                <a href="/contact">Contact Support</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/faq">View FAQ</a>
              </Button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
