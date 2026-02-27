import { FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container py-8 lg:py-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-background" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: February 27, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Fitverse's website and services, you agree to be
              bound by these Terms of Service and all applicable laws and regulations.
              If you do not agree with any of these terms, you are prohibited from
              using our services.
            </p>
          </section>

          <Separator />

          {/* Use of Service */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold">Use of Service</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                You must be at least 18 years old to use our services. By using
                Fitverse, you represent and warrant that you meet this age requirement.
              </p>
              
              <h3 className="font-semibold text-foreground pt-2">
                You agree to:
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt the service</li>
              </ul>
            </div>
          </section>

          <Separator />

          {/* Accounts */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Account Registration</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you create an account with us, you must provide accurate,
              complete, and current information. You are responsible for maintaining
              the confidentiality of your account and password.
            </p>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <div className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  You are responsible for all activities that occur under your account.
                  We reserve the right to refuse service, terminate accounts, or remove
                  content at our discretion.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Orders and Payments */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Orders and Payments</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Order Acceptance</h3>
                <p className="leading-relaxed">
                  All orders are subject to acceptance and availability. We reserve the
                  right to refuse or cancel any order for any reason, including product
                  availability, errors in pricing or product information, or suspected
                  fraud.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Pricing</h3>
                <p className="leading-relaxed">
                  All prices are in USD and are subject to change without notice.
                  Despite our best efforts, a small number of items may be mispriced.
                  If an item's correct price is higher than stated, we will contact you
                  before shipping.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Payment</h3>
                <p className="leading-relaxed">
                  We accept major credit cards, PayPal, and other payment methods as
                  displayed at checkout. By providing payment information, you
                  represent that you are authorized to use the payment method.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Intellectual Property */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Intellectual Property</h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              All content on this website, including text, graphics, logos, images,
              and software, is the property of Fitverse or its content suppliers and
              is protected by intellectual property laws.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              You may not reproduce, distribute, modify, or create derivative works
              from any content without our express written permission.
            </p>
          </section>

          <Separator />

          {/* Product Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Product Information</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              We strive to provide accurate product descriptions and images. However,
              we do not warrant that product descriptions, colors, or other content is
              accurate, complete, or error-free. Actual product colors may vary from
              those displayed on your screen.
            </p>
          </section>

          <Separator />

          {/* Returns and Refunds */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Returns and Refunds</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our return and refund policy is outlined in our separate Return Policy
              document. Please review it carefully before making a purchase.
            </p>

            <a
              href="/returns"
              className="inline-block text-sm font-medium hover:underline"
            >
              View Return Policy →
            </a>
          </section>

          <Separator />

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Fitverse shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, including loss of profits, data, or goodwill, arising from your
              use or inability to use our services.
            </p>
          </section>

          <Separator />

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless Fitverse and its affiliates
              from any claims, losses, damages, liabilities, and expenses arising from
              your use of our services or violation of these Terms.
            </p>
          </section>

          <Separator />

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your account and access to our services
              immediately, without prior notice, for any reason, including breach of
              these Terms. Upon termination, your right to use the service will cease
              immediately.
            </p>
          </section>

          <Separator />

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the
              laws of the State of New York, without regard to its conflict of law
              provisions. Any disputes shall be resolved in the courts located in New
              York, NY.
            </p>
          </section>

          <Separator />

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify
              you of any changes by posting the new Terms on this page and updating
              the "Last updated" date. Your continued use of the service after changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <Separator />

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about these Terms, please contact us:
            </p>

            <div className="bg-secondary/50 rounded-lg p-4 space-y-2 text-sm">
              <p>
                <span className="font-medium">Email:</span> legal@fitverse.com
              </p>
              <p>
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
              </p>
              <p>
                <span className="font-medium">Address:</span> 123 Fashion Avenue, New
                York, NY 10001
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
