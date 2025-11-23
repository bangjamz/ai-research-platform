"use client";

import { Hero } from "@/components/Hero";
import { PillarCard } from "@/components/PillarCard";
import { Search, Database, FileText, Bot } from "lucide-react";

const pillars = [
  {
    title: "Pilar 1: Akuisisi Data Masif",
    subtitle: "Perplexity AI",
    description:
      "Jangan mulai dari kertas kosong. Gunakan AI untuk mengumpulkan bahan baku berkualitas tinggi dalam hitungan detik.",
    icon: Search,
    color: "blue" as const,
    href: "/pilar-1-akuisisi-data",
  },
  {
    title: "Pilar 2: Sintesis & Konstruksi",
    subtitle: "NotebookLM",
    description:
      "Ubah data mentah menjadi 'Otak Kedua' yang terstruktur. Biarkan AI membangun konteks sebelum Anda bertanya.",
    icon: Database,
    color: "teal" as const,
    href: "/pilar-2-sintesis",
  },
  {
    title: "Pilar 3: Standarisasi Format",
    subtitle: "Markdown Platform",
    description:
      "Format adalah kunci efisiensi. Siapkan dokumen yang bersih agar mudah 'dibaca' oleh model AI di tahap akhir.",
    icon: FileText,
    color: "purple" as const,
    href: "/pilar-3-standarisasi",
  },
  {
    title: "Pilar 4: Eksekusi & Interaksi",
    subtitle: "Gemini Advanced / ChatGPT",
    description:
      "Berinteraksi dengan data Anda. Diskusi dengan 'asisten ahli' yang telah mempelajari data Anda.",
    icon: Bot,
    color: "orange" as const,
    href: "/pilar-4-eksekusi",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      <Hero />

      <section id="overview" className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            4 Pilar Tahapan Utama
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Sebuah alur kerja terintegrasi untuk hasil riset yang komprehensif.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
