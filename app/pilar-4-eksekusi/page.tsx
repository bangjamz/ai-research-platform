"use client";

import { WorkflowStep } from "@/components/WorkflowStep";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { ImageModal } from "@/components/ImageModal";
import { Zap } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const steps = [
    {
        title: "Buka Platform AI Unggulan",
        description:
            "Gunakan model paling cerdas yang tersedia.",
        subSteps: ["Gemini Advanced", "ChatGPT Plus"],
    },
    {
        title: "Unggah (Upload) File PDF",
        description:
            "Unggah file PDF dari Tahap 3 ke dalam percakapan. Ini adalah basis pengetahuan yang sudah Anda kurasi.",
    },
    {
        title: "Berikan Custom Instructions",
        description:
            "Berikan instruksi peran agar respons sesuai level Anda.",
        subSteps: [
            '"Bertindaklah sebagai rekan peneliti doktoral. Analisis PDF yang saya unggah dan berikan kritik..."',
        ],
    },
    {
        title: "Eksplorasi & Diskusi",
        description:
            "Mulai eksplorasi dan diskusi mendalam berdasarkan dokumen Anda sendiri. Ini bukan tanya jawab biasa, tapi kolaborasi strategis.",
    },
];

const chart = `
graph TD
    A[User] -->|Upload PDF| B(AI Model: Gemini / ChatGPT)
    A -->|Custom Instruction| B
    B -->|Analyze Context| B
    A <-->|Deep Discussion| B
    style A fill:#f1f5f9,stroke:#334155,stroke-width:2px
    style B fill:#fff7ed,stroke:#ea580c,stroke-width:2px
`;

export default function Pillar4Page() {
    return (
        <>
            <div className="relative">
                <div className="absolute right-4 top-4 z-10 md:right-8 md:top-8">
                    <ImageModal src={getAssetPath("/images/pillar-4.jpg")} alt="Visualisasi Pillar 4" />
                </div>
                <WorkflowStep
                    number={4}
                    title="Eksekusi & Interaksi Analitis"
                    description="Filosofi: Berinteraksi dengan data Anda. Ini bukan lagi sekadar bertanya pada AI, tapi berdiskusi dengan 'asisten ahli' yang telah mempelajari data Anda."
                    steps={steps}
                    color="orange"
                    icon={Zap}
                />
            </div>
            <div className="container mx-auto px-4 md:px-6 pb-20">
                <h3 className="text-2xl font-bold text-center mb-6 text-slate-800">Visualisasi Alur Kerja (Teknis)</h3>
                <MermaidDiagram chart={chart} />
            </div>
        </>
    );
}
