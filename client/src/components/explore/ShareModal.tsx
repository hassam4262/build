import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share2, Copy, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url?: string;
}

export function ShareModal({ isOpen, onClose, title, url = window.location.href }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareEmail = () => {
    const subject = `Check this out: ${title}`;
    const body = `I found this interesting: ${title}\n${url}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleShareWhatsApp = () => {
    const text = `${title}\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleShareTwitter = () => {
    const text = `Check this out: ${title}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            Share This
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Copy Link */}
          <div>
            <label className="text-sm font-medium mb-2 block">Copy Link</label>
            <div className="flex gap-2">
              <Input value={url} readOnly className="flex-1" data-testid="input-share-url" />
              <Button
                size="sm"
                onClick={handleCopyLink}
                data-testid="button-copy-link"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Social Share Options */}
          <div>
            <label className="text-sm font-medium mb-3 block">Share on Social</label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="gap-2"
                onClick={handleShareEmail}
                data-testid="button-share-email"
              >
                <Mail className="w-4 h-4" />
                Email
              </Button>
              <Button
                variant="outline"
                className="gap-2"
                onClick={handleShareWhatsApp}
                data-testid="button-share-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                className="gap-2"
                onClick={handleShareTwitter}
                data-testid="button-share-twitter"
              >
                <Share2 className="w-4 h-4" />
                Twitter
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="outline" className="flex-1" onClick={onClose} data-testid="button-close-share-modal">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
