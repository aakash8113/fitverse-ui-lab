import { useState, useCallback } from "react";
import { Upload, Image as ImageIcon, Sparkles, ChevronRight, Download, ZoomIn, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import product1 from "@/assets/products/product-1.jpg";
import product2 from "@/assets/products/product-2.jpg";
import product3 from "@/assets/products/product-3.jpg";
import product4 from "@/assets/products/product-4.jpg";

const sampleClothes = [
  { id: "1", image: product1, name: "White Blazer Set" },
  { id: "2", image: product2, name: "Black Leather Jacket" },
  { id: "3", image: product3, name: "Beige Sweater" },
  { id: "4", image: product4, name: "Navy Midi Dress" },
];

export function AITryOn() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedClothing, setSelectedClothing] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
        setStep(2);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
        setStep(2);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = () => {
    setIsProcessing(true);
    setStep(3);
    
    // Simulate AI processing
    setTimeout(() => {
      setResult(selectedClothing);
      setIsProcessing(false);
    }, 3000);
  };

  const reset = () => {
    setStep(1);
    setUploadedImage(null);
    setSelectedClothing(null);
    setResult(null);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-[600px] relative">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all",
                step >= s
                  ? "gradient-ai text-white shadow-ai"
                  : "bg-secondary text-muted-foreground"
              )}
            >
              {s}
            </div>
            {s < 3 && (
              <ChevronRight
                className={cn(
                  "w-6 h-6 mx-2",
                  step > s ? "text-accent" : "text-muted-foreground"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="max-w-4xl mx-auto">
        {/* Step 1: Upload Photo */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-center mb-2">Upload Your Photo</h3>
            <p className="text-muted-foreground text-center mb-8">
              Upload a full-body photo for the best results
            </p>

            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={cn(
                "border-2 border-dashed rounded-3xl p-12 text-center transition-all",
                isDragging
                  ? "border-accent bg-accent/5 scale-[1.02]"
                  : "border-border hover:border-accent/50"
              )}
            >
              <div className="gradient-ai-subtle rounded-2xl p-8 mx-auto max-w-md">
                <Upload className="w-12 h-12 mx-auto mb-4 text-accent" />
                <p className="text-lg font-medium mb-2">Drag & drop your photo here</p>
                <p className="text-sm text-muted-foreground mb-6">or click to browse</p>
                <label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <Button className="btn-ai cursor-pointer">
                    <ImageIcon className="w-4 h-4 mr-2" />
                    Select Photo
                  </Button>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>Your images are secure and never stored</span>
            </div>
          </div>
        )}

        {/* Step 2: Select Clothing */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-center mb-2">Select Clothing</h3>
            <p className="text-muted-foreground text-center mb-8">
              Choose an item to try on virtually
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Your Photo */}
              <div className="space-y-4">
                <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Your Photo</h4>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary">
                  <img
                    src={uploadedImage!}
                    alt="Your uploaded photo"
                    className="w-full h-full object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={reset}
                    className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 hover:bg-white"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Clothing Selection */}
              <div className="space-y-4">
                <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Select Clothing</h4>
                <div className="grid grid-cols-2 gap-3">
                  {sampleClothes.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedClothing(item.image)}
                      className={cn(
                        "relative aspect-[3/4] rounded-xl overflow-hidden border-2 transition-all",
                        selectedClothing === item.image
                          ? "border-accent ring-2 ring-accent/20 scale-[0.98]"
                          : "border-transparent hover:border-border"
                      )}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {selectedClothing === item.image && (
                        <div className="absolute inset-0 bg-accent/10 flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-accent" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={!selectedClothing}
                  className="w-full btn-ai h-12 text-base mt-4"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Try-On
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Result */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-center mb-2">
              {isProcessing ? "AI is Working..." : "Your Virtual Try-On"}
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              {isProcessing ? "This usually takes a few seconds" : "See how it looks on you!"}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Before */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider text-center">Before</h4>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary">
                  <img
                    src={uploadedImage!}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* After */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider text-center">After</h4>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary relative">
                  {isProcessing ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gradient-ai-subtle">
                      <div className="relative">
                        <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
                        <Sparkles className="w-6 h-6 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground">Processing your image...</p>
                    </div>
                  ) : (
                    <>
                      <img
                        src={result!}
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        <Button variant="secondary" size="sm" className="flex-1">
                          <ZoomIn className="w-4 h-4 mr-1.5" />
                          Zoom
                        </Button>
                        <Button variant="secondary" size="sm" className="flex-1">
                          <Download className="w-4 h-4 mr-1.5" />
                          Save
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {!isProcessing && (
              <div className="flex justify-center gap-4 mt-8">
                <Button variant="outline" onClick={reset} className="min-w-32">
                  Try Another
                </Button>
                <Button className="btn-ai min-w-32">
                  Add to Cart
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
