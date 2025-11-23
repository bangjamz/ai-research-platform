"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Maximize2 } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageModalProps {
    src: string;
    alt: string;
}

export function ImageModal({ src, alt }: ImageModalProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleDownload = async () => {
        try {
            const response = await fetch(src);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = src.split("/").pop() || "image.jpg";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 pr-4 shadow-sm transition-all hover:border-blue-400 hover:shadow-md"
            >
                <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-slate-100">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                    />
                </div>
                <div className="text-left">
                    <p className="text-xs font-medium text-slate-500">Infografis</p>
                    <p className="text-sm font-semibold text-slate-900">Lihat Detail</p>
                </div>
                <Maximize2 className="ml-2 h-4 w-4 text-slate-400 transition-colors group-hover:text-blue-500" />
            </button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
                        onClick={() => setIsOpen(false)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                        >
                            <X size={24} />
                        </button>

                        {/* Download Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDownload();
                            }}
                            className="absolute right-16 top-4 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                            title="Download Image"
                        >
                            <Download size={24} />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative h-full w-full max-w-5xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-contain"
                                quality={100}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
