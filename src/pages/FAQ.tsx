import { useState } from "react";
import { Search, Package, CreditCard, Truck, RefreshCw, HelpCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = {
    orders: [
      {
        question: "How can I track my order?",
        answer:
          "You can track your order by logging into your account and visiting the Orders page. Each order has a tracking number that provides real-time updates on your package location. You'll also receive email notifications at each stage of delivery.",
      },
      {
        question: "Can I modify or cancel my order?",
        answer:
          "You can modify or cancel your order within 1 hour of placing it. After that, the order enters processing and cannot be changed. Please contact our support team immediately if you need assistance with a recent order.",
      },
      {
        question: "What are the shipping times?",
        answer:
          "Standard shipping takes 3-5 business days. Express shipping (2-3 days) and overnight shipping options are available at checkout. International orders typically take 7-14 business days depending on the destination country.",
      },
      {
        question: "Do you offer international shipping?",
        answer:
          "Yes, we ship to over 100 countries worldwide. International shipping rates and delivery times vary by location. You can see the exact shipping cost and estimated delivery date at checkout.",
      },
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are processed securely through our encrypted payment gateway.",
      },
      {
        question: "Is my payment information secure?",
        answer:
          "Absolutely. We use industry-standard SSL encryption to protect your payment information. We never store your complete credit card details on our servers. All payments are processed through PCI-compliant payment processors.",
      },
      {
        question: "Can I use multiple payment methods?",
        answer:
          "Currently, we only support one payment method per order. However, you can use gift cards or store credit in combination with a credit card.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we partner with Affirm and Klarna to offer flexible payment plans on orders over $100. You can choose to pay in 4 interest-free installments or monthly payments with approved credit.",
      },
    ],
    returns: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy for unworn, unwashed items with original tags attached. Returns are free for store credit or exchange, with a small fee for refunds to original payment method. Sale items and final sale merchandise cannot be returned.",
      },
      {
        question: "How do I initiate a return?",
        answer:
          "Log into your account, go to Orders, and select the order containing the item you want to return. Click 'Return Item' and follow the prompts. You'll receive a prepaid return label via email within 24 hours.",
      },
      {
        question: "When will I receive my refund?",
        answer:
          "Refunds are processed within 5-7 business days after we receive your return. The time it takes for the refund to appear in your account depends on your financial institution, typically 3-5 business days.",
      },
      {
        question: "Can I exchange an item?",
        answer:
          "Yes! Exchanges are free and easy. Simply initiate a return and select 'Exchange' instead of 'Refund'. We'll ship your new item as soon as we receive your return, usually within 48 hours.",
      },
    ],
    products: [
      {
        question: "How do I find my size?",
        answer:
          "Visit our Size Guide page for detailed measurements and fitting recommendations for each product category. We also include customer reviews with fit information. If you're between sizes, we generally recommend sizing up.",
      },
      {
        question: "Are your products sustainable?",
        answer:
          "Many of our products are made from sustainable materials and ethical manufacturing processes. Look for the 'Sustainable' badge on product pages. We're committed to increasing our sustainable offerings and reducing our environmental impact.",
      },
      {
        question: "Do you restock sold-out items?",
        answer:
          "Popular items are often restocked. You can sign up for 'Back in Stock' notifications on any sold-out product page. We'll email you as soon as the item becomes available again in your size.",
      },
      {
        question: "Can I see how products look on different body types?",
        answer:
          "Yes! Many of our product pages feature customer photos and our models represent a range of body types and sizes. You can also use our FitVerse AI feature to virtually try on items.",
      },
    ],
    account: [
      {
        question: "How do I create an account?",
        answer:
          "Click the user icon in the top right corner and select 'Sign Up'. Enter your email, create a password, and fill in your basic information. You can also sign up during checkout when placing your first order.",
      },
      {
        question: "I forgot my password. What should I do?",
        answer:
          "Click 'Forgot Password' on the login page. Enter your email address and we'll send you a secure link to reset your password. The link is valid for 24 hours.",
      },
      {
        question: "How do I update my account information?",
        answer:
          "Log into your account and go to Settings. From there you can update your personal information, email preferences, saved addresses, and payment methods.",
      },
      {
        question: "Can I delete my account?",
        answer:
          "Yes, you can delete your account from Settings > Privacy > Delete Account. Please note this action is permanent and will remove all your order history, saved items, and personal information.",
      },
    ],
  };

  const filterFAQs = (category: keyof typeof faqData) => {
    if (!searchQuery) return faqData[category];
    
    return faqData[category].filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to common questions about orders, shipping, returns, and
            more.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <Tabs defaultValue="orders" className="space-y-8">
          <TabsList className="w-full grid grid-cols-2 lg:grid-cols-5 h-auto">
            <TabsTrigger value="orders" className="gap-2">
              <Package className="w-4 h-4" />
              <span className="hidden sm:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="payment" className="gap-2">
              <CreditCard className="w-4 h-4" />
              <span className="hidden sm:inline">Payment</span>
            </TabsTrigger>
            <TabsTrigger value="shipping" className="gap-2">
              <Truck className="w-4 h-4" />
              <span className="hidden sm:inline">Shipping</span>
            </TabsTrigger>
            <TabsTrigger value="returns" className="gap-2">
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Returns</span>
            </TabsTrigger>
            <TabsTrigger value="account" className="gap-2">
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Account</span>
            </TabsTrigger>
          </TabsList>

          {/* Orders FAQs */}
          <TabsContent value="orders">
            <div className="bg-card border border-border rounded-2xl p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {filterFAQs("orders").map((faq, index) => (
                  <AccordionItem key={index} value={`order-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* Payment FAQs */}
          <TabsContent value="payment">
            <div className="bg-card border border-border rounded-2xl p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {filterFAQs("payment").map((faq, index) => (
                  <AccordionItem key={index} value={`payment-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* Shipping FAQs (using orders data) */}
          <TabsContent value="shipping">
            <div className="bg-card border border-border rounded-2xl p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {filterFAQs("orders").map((faq, index) => (
                  <AccordionItem key={index} value={`shipping-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* Returns FAQs */}
          <TabsContent value="returns">
            <div className="bg-card border border-border rounded-2xl p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {filterFAQs("returns").map((faq, index) => (
                  <AccordionItem key={index} value={`return-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* Account FAQs */}
          <TabsContent value="account">
            <div className="bg-card border border-border rounded-2xl p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {filterFAQs("account").map((faq, index) => (
                  <AccordionItem key={index} value={`account-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>

        {/* Still Need Help Section */}
        <div className="mt-12 text-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-border rounded-2xl p-8 lg:p-12">
          <HelpCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Can't find what you're looking for? Our customer support team is here
            to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Contact Support
              </button>
            </a>
            <a href="mailto:support@fitverse.com">
              <button className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
                Email Us
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
