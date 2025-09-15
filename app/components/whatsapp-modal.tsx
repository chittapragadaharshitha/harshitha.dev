'use client';

import React from 'react';
import { X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  if (!isOpen) return null;

  const handleUnderstand = () => {
    // Close modal and open WhatsApp
    onClose();
    window.open('https://wa.me/919391230366', '_blank');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md bg-zinc-900/90 backdrop-blur-md border border-zinc-800/50 rounded-lg shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-zinc-300 transition-colors rounded border border-zinc-600 bg-zinc-800/50 hover:bg-zinc-700/50"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal content */}
        <div className="p-6">
          {/* WhatsApp icon */}
          <div className="flex items-center justify-center mb-4">
            <div className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400">
              <FaWhatsapp className="h-4 w-4" />
            </div>
          </div>

          <h2 className="text-lg font-medium text-zinc-50 text-center mb-4">
            Personal WhatsApp
          </h2>

          {/* Guidelines */}
          <div className="space-y-2 mb-6 text-sm text-zinc-400">
            <p>• Text message first (no direct calls)</p>
            <p>• No spam or promotional messages</p>
            <p>• Professional inquiries only</p>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-2">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 text-zinc-400 bg-zinc-800/50 hover:text-zinc-300 hover:bg-zinc-700/50 border border-zinc-600 rounded transition-all duration-300 text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleUnderstand}
              className="flex-1 px-4 py-2 text-zinc-50 bg-zinc-800/50 hover:text-zinc-300 hover:bg-zinc-700/50 border border-zinc-600 rounded transition-all duration-300 text-sm"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
