import { Shield, Eye, Lock, Database, UserCheck, AlertCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container py-8 lg:py-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-background" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: February 27, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Fitverse, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information
              when you visit our website and use our services. Please read this
              policy carefully to understand our practices regarding your personal
              data.
            </p>
          </section>

          <Separator />

          {/* Information We Collect */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Information We Collect</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Personal Information
                </h3>
                <p className="leading-relaxed">
                  When you create an account or make a purchase, we collect information
                  such as your name, email address, phone number, shipping address,
                  billing address, and payment information.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Automatically Collected Information
                </h3>
                <p className="leading-relaxed">
                  We automatically collect certain information when you visit our
                  website, including your IP address, browser type, device information,
                  pages viewed, and the time and date of your visit.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Cookies and Tracking Technologies
                </h3>
                <p className="leading-relaxed">
                  We use cookies, web beacons, and similar tracking technologies to
                  enhance your experience, remember your preferences, and analyze site
                  traffic.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold">How We Use Your Information</h2>
            </div>
            
            <ul className="space-y-3 text-muted-foreground list-disc list-inside">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
              <li>Personalize your shopping experience</li>
            </ul>
          </section>

          <Separator />

          {/* Information Sharing */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold">Information Sharing</h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share your information
              with:
            </p>

            <ul className="space-y-3 text-muted-foreground list-disc list-inside">
              <li>
                <span className="font-medium text-foreground">Service Providers:</span>{" "}
                Third-party companies that help us operate our business (payment
                processors, shipping companies, email services)
              </li>
              <li>
                <span className="font-medium text-foreground">Legal Requirements:</span>{" "}
                When required by law or to protect our rights
              </li>
              <li>
                <span className="font-medium text-foreground">Business Transfers:</span>{" "}
                In connection with a merger, sale, or acquisition
              </li>
            </ul>
          </section>

          <Separator />

          {/* Data Security */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold">Data Security</h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures
              to protect your personal information. However, no method of transmission
              over the internet is 100% secure. We use SSL encryption for all
              transactions and store your data on secure servers with restricted access.
            </p>
          </section>

          <Separator />

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>

            <ul className="space-y-3 text-muted-foreground list-disc list-inside">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <Separator />

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as necessary to fulfill
              the purposes outlined in this Privacy Policy, unless a longer retention
              period is required or permitted by law. When we no longer need your
              information, we will securely delete or anonymize it.
            </p>
          </section>

          <Separator />

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for children under 13 years of age. We do
              not knowingly collect personal information from children. If you believe
              we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <Separator />

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you
              of any changes by posting the new policy on this page and updating the
              "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <Separator />

          {/* Contact Us */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold">Contact Us</h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>

            <div className="bg-secondary/50 rounded-lg p-4 space-y-2 text-sm">
              <p>
                <span className="font-medium">Email:</span> privacy@fitverse.com
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
