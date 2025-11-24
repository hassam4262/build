import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: any;
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    toast.success(`Added ${quantity}x ${product.name} to cart!`);
    setQuantity(1);
    onClose();
  };

  const handleBuyNow = () => {
    toast.success(`Proceeding to checkout for ${product.name}`);
    onClose();
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 py-4">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-secondary/50 rounded-lg aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            {/* Category & Rating */}
            <div className="flex items-center justify-between">
              <Badge variant="secondary">{product.category}</Badge>
              <div className="flex items-center gap-1 text-sm">
                ⭐ {product.rating} ({product.reviews} reviews)
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-muted-foreground text-sm">{product.description}</p>
            </div>

            {/* Size/Type & Availability */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase">Size / Type</p>
                <p className="font-semibold">{product.size}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">Stock</p>
                <p className="font-semibold text-green-600">In Stock ({product.stock} units)</p>
              </div>
            </div>

            {/* Brand / Grade (if applicable) */}
            {product.brand && (
              <div>
                <p className="text-xs text-muted-foreground uppercase">Brand / Grade</p>
                <p className="font-semibold">{product.brand}</p>
              </div>
            )}

            {/* Price */}
            <div className="bg-primary/10 rounded-lg p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">₹{product.price}</span>
                <span className="text-sm text-muted-foreground">per unit</span>
              </div>
              {product.originalPrice && (
                <div className="text-sm text-muted-foreground">
                  <span className="line-through">₹{product.originalPrice}</span>
                  <span className="ml-2 text-green-600 font-semibold">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-muted-foreground hover:bg-secondary"
                  data-testid="button-decrease-qty"
                >
                  −
                </button>
                <span className="px-4 py-2 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-3 py-2 text-muted-foreground hover:bg-secondary"
                  data-testid="button-increase-qty"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="text-lg font-bold">
              Total: ₹{totalPrice}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                className="flex-1 gap-2"
                onClick={() => {
                  setIsWishlisted(!isWishlisted);
                  toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
                }}
                data-testid="button-wishlist"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                Wishlist
              </Button>
              <Button
                className="flex-1 gap-2"
                onClick={handleAddToCart}
                data-testid="button-add-to-cart"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
            </div>

            <Button
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={handleBuyNow}
              data-testid="button-buy-now"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
