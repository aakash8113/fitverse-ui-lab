import { Ruler, User, ShoppingBag } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SizeGuide() {
  const mensShirts = [
    { size: "XS", chest: "34-36", waist: "28-30", length: "27" },
    { size: "S", chest: "36-38", waist: "30-32", length: "28" },
    { size: "M", chest: "38-40", waist: "32-34", length: "29" },
    { size: "L", chest: "40-42", waist: "34-36", length: "30" },
    { size: "XL", chest: "42-44", waist: "36-38", length: "31" },
    { size: "XXL", chest: "44-46", waist: "38-40", length: "32" },
  ];

  const mensPants = [
    { size: "28", waist: "28", hip: "34-36", inseam: "30-32" },
    { size: "30", waist: "30", hip: "36-38", inseam: "30-32" },
    { size: "32", waist: "32", hip: "38-40", inseam: "30-32" },
    { size: "34", waist: "34", hip: "40-42", inseam: "30-32" },
    { size: "36", waist: "36", hip: "42-44", inseam: "30-32" },
    { size: "38", waist: "38", hip: "44-46", inseam: "30-32" },
  ];

  const womensClothing = [
    { size: "XS", bust: "32-34", waist: "24-26", hip: "34-36" },
    { size: "S", bust: "34-36", waist: "26-28", hip: "36-38" },
    { size: "M", bust: "36-38", waist: "28-30", hip: "38-40" },
    { size: "L", bust: "38-40", waist: "30-32", hip: "40-42" },
    { size: "XL", bust: "40-42", waist: "32-34", hip: "42-44" },
    { size: "XXL", bust: "42-44", waist: "34-36", hip: "44-46" },
  ];

  const shoeSize = [
    { us: "6", eu: "39", uk: "5.5", cm: "23.5" },
    { us: "6.5", eu: "39.5", uk: "6", cm: "24" },
    { us: "7", eu: "40", uk: "6.5", cm: "24.5" },
    { us: "7.5", eu: "40.5", uk: "7", cm: "25" },
    { us: "8", eu: "41", uk: "7.5", cm: "25.5" },
    { us: "8.5", eu: "42", uk: "8", cm: "26" },
    { us: "9", eu: "42.5", uk: "8.5", cm: "26.5" },
    { us: "9.5", eu: "43", uk: "9", cm: "27" },
    { us: "10", eu: "44", uk: "9.5", cm: "27.5" },
    { us: "10.5", eu: "44.5", uk: "10", cm: "28" },
    { us: "11", eu: "45", uk: "10.5", cm: "28.5" },
    { us: "11.5", eu: "45.5", uk: "11", cm: "29" },
    { us: "12", eu: "46", uk: "11.5", cm: "29.5" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
            <Ruler className="w-8 h-8 text-background" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Size Guide</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your perfect fit with our comprehensive size charts and
            measurement guide.
          </p>
        </div>

        {/* How to Measure Section */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">How to Measure</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Chest / Bust</h3>
              <p className="text-sm text-muted-foreground">
                Measure around the fullest part of your chest, keeping the tape
                measure horizontal and snug but not tight.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Ruler className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Waist</h3>
              <p className="text-sm text-muted-foreground">
                Measure around your natural waistline, which is the narrowest part
                of your torso, about 1 inch above your belly button.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Hips</h3>
              <p className="text-sm text-muted-foreground">
                Measure around the fullest part of your hips, approximately 8
                inches below your natural waistline.
              </p>
            </div>
          </div>
        </div>

        {/* Size Charts */}
        <Tabs defaultValue="mens-tops" className="space-y-6">
          <TabsList className="w-full grid grid-cols-2 lg:grid-cols-4 h-auto">
            <TabsTrigger value="mens-tops">Men's Tops</TabsTrigger>
            <TabsTrigger value="mens-bottoms">Men's Bottoms</TabsTrigger>
            <TabsTrigger value="womens">Women's</TabsTrigger>
            <TabsTrigger value="shoes">Shoes</TabsTrigger>
          </TabsList>

          {/* Men's Tops */}
          <TabsContent value="mens-tops">
            <div className="bg-card border border-border rounded-2xl p-6 overflow-x-auto">
              <h3 className="text-xl font-semibold mb-4">Men's Shirts & Tops</h3>
              <p className="text-sm text-muted-foreground mb-6">
                All measurements are in inches
              </p>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Size</TableHead>
                    <TableHead className="font-semibold">Chest</TableHead>
                    <TableHead className="font-semibold">Waist</TableHead>
                    <TableHead className="font-semibold">Length</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mensShirts.map((row) => (
                    <TableRow key={row.size}>
                      <TableCell className="font-medium">{row.size}</TableCell>
                      <TableCell>{row.chest}</TableCell>
                      <TableCell>{row.waist}</TableCell>
                      <TableCell>{row.length}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Men's Bottoms */}
          <TabsContent value="mens-bottoms">
            <div className="bg-card border border-border rounded-2xl p-6 overflow-x-auto">
              <h3 className="text-xl font-semibold mb-4">Men's Pants & Jeans</h3>
              <p className="text-sm text-muted-foreground mb-6">
                All measurements are in inches
              </p>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Size</TableHead>
                    <TableHead className="font-semibold">Waist</TableHead>
                    <TableHead className="font-semibold">Hip</TableHead>
                    <TableHead className="font-semibold">Inseam</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mensPants.map((row) => (
                    <TableRow key={row.size}>
                      <TableCell className="font-medium">{row.size}</TableCell>
                      <TableCell>{row.waist}</TableCell>
                      <TableCell>{row.hip}</TableCell>
                      <TableCell>{row.inseam}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Women's Clothing */}
          <TabsContent value="womens">
            <div className="bg-card border border-border rounded-2xl p-6 overflow-x-auto">
              <h3 className="text-xl font-semibold mb-4">Women's Clothing</h3>
              <p className="text-sm text-muted-foreground mb-6">
                All measurements are in inches
              </p>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Size</TableHead>
                    <TableHead className="font-semibold">Bust</TableHead>
                    <TableHead className="font-semibold">Waist</TableHead>
                    <TableHead className="font-semibold">Hip</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {womensClothing.map((row) => (
                    <TableRow key={row.size}>
                      <TableCell className="font-medium">{row.size}</TableCell>
                      <TableCell>{row.bust}</TableCell>
                      <TableCell>{row.waist}</TableCell>
                      <TableCell>{row.hip}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Shoes */}
          <TabsContent value="shoes">
            <div className="bg-card border border-border rounded-2xl p-6 overflow-x-auto">
              <h3 className="text-xl font-semibold mb-4">
                International Shoe Size Conversion
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Find your size across different regions
              </p>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">US</TableHead>
                    <TableHead className="font-semibold">EU</TableHead>
                    <TableHead className="font-semibold">UK</TableHead>
                    <TableHead className="font-semibold">CM</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {shoeSize.map((row) => (
                    <TableRow key={row.us}>
                      <TableCell className="font-medium">{row.us}</TableCell>
                      <TableCell>{row.eu}</TableCell>
                      <TableCell>{row.uk}</TableCell>
                      <TableCell>{row.cm}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>

        {/* Fit Tips */}
        <div className="mt-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Fit Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Between Sizes?</h3>
              <p className="text-muted-foreground">
                If you're between sizes, we generally recommend sizing up for a more
                comfortable fit. Check the product description for specific fit notes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-muted-foreground">
                Still unsure about sizing? Contact our customer service team or check
                customer reviews for real fit feedback.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Virtual Try-On</h3>
              <p className="text-muted-foreground">
                Use our FitVerse AI feature to virtually try on items and see how they
                look before you buy!
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">
                Don't worry if the fit isn't perfect - we offer free returns and
                exchanges within 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
