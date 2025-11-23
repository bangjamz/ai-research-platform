"use client";

import { WorkflowStep } from "@/components/WorkflowStep";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { ImageModal } from "@/components/ImageModal";
import { Database } from "lucide-react";

const steps = [
    {
        title: "Buka Google NotebookLM",
        description:
            "Buat notebook baru. Ini akan menjadi 'Otak Kedua' Anda untuk topik ini.",
    },
    {
        title: "Tempel (Paste) URL",
        description:
            "Tempel semua URL dari Tahap 1. Tunggu hingga AI selesai membangun indeks (build database).",
    },
    {
        title: "Deep Dive (Opsional)",
        description:
            "Masih kurang? Gunakan fitur pencarian internal NotebookLM dengan 'Deep Research' aktif untuk menambah sumber.",
    },
    {
        title: "Perintahkan Sintesis",
        description:
            "Minta NotebookLM membuat output terstruktur berdasarkan sumber yang ada.",
        subSteps: [
            '"Buat Tabel Pemahaman Komprehensif tentang [Topik]."',
            '"Tuliskan Literature Review mengenai permasalahan pada [Topik]."',
        ],
    },
    {
        title: "Konversi ke Source Baru",
        description:
            "Ubah hasil sintesis (notes) tersebut menjadi Source baru dalam notebook untuk memperkuat konteks.",
    },
];

const chart = `
graph TD
    A[User] -->|Create Notebook| B(NotebookLM)
    A -->|Paste URLs| B
    B -->|Build Index| B
    A -->|Request Synthesis| B
    B -->|Structured Output| A
    A -->|Save as Source| B
    style A fill:#f1f5f9,stroke:#334155,stroke-width:2px
    style B fill:#ccfbf1,stroke:#0d9488,stroke-width:2px
`;

export default function Pillar2Page() {
    return (
        <>
            <div className="relative">
                <div className="absolute right-4 top-4 z-10 md:right-8 md:top-8">
                    <ImageModal src="/belajar/ai/images/pillar-2.png" alt="Visualisasi Pillar 2" />
                </div>
                <WorkflowStep
                    number={2}
                    title="Sintesis & Konstruksi"
                    description="Filosofi: Ubah data mentah menjadi 'Otak Kedua' yang terstruktur. Biarkan AI membangun konteks sebelum Anda bertanya."
                    steps={steps}
                    color="teal"
                    icon={Database}
                />
            </div>
            <div className="container mx-auto px-4 md:px-6 pb-20">
                <h3 className="text-2xl font-bold text-center mb-6 text-slate-800">Visualisasi Alur Kerja (Teknis)</h3>
                <MermaidDiagram chart={chart} />
            </div>
        </>
    );
}
