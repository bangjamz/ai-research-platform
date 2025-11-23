"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-900 py-20 md:py-32">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -left-10 -top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
                        Workflow Penggunaan <br />
                        <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
                            AI Cerdas & Strategis
                        </span>
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 md:text-xl">
                        Metode Kurasi Pengetahuan untuk Hasil Riset yang Mendalam.
                        <br />
                        <span className="text-sm text-slate-400">
                            Oleh: Dr. Indra Surya Permana, MM., M.Kom.
                        </span>
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-12">
                        <Link
                            href="/pilar-1-akuisisi-data"
                            className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                        >
                            Mulai Pelajari
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="#overview"
                            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                        >
                            Lihat Ringkasan
                        </Link>
                    </div>

                    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
                        <Image
                            src={getAssetPath("/images/hero-overview.jpg")}
                            alt="Workflow Overview"
                            width={1024}
                            height={576}
                            className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
