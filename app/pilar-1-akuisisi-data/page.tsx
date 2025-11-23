"use client";

import { WorkflowStep } from "@/components/WorkflowStep";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { ImageModal } from "@/components/ImageModal";
import { Search } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const steps = [
    {
        title: "Buka Perplexity",
        description:
            "Bertindaklah sebagai research director. Jangan hanya bertanya, tapi berikan arahan strategis.",
    },
    {
        title: "Gunakan Prompt Spesifik",
        description:
            "Gunakan prompt berikut untuk menjaring sumber berkualitas:",
        subSteps: [
            '"Saya sedang mendalami [Topik]. Carikan 30+ URL kredibel untuk bahan belajar saya. Hanya tampilkan daftar URL."',
        ],
    },
    {
        title: "Tegaskan Instruksi",
        description:
            "Jika AI memberikan penjelasan panjang lebar, tegaskan kembali: 'Hanya daftar URL saja.' Fokus kita adalah bahan baku.",
    },
    {
        title: "Salin (Copy) Daftar URL",
        description:
            "Salin seluruh daftar URL yang diberikan. Ini adalah bahan baku mentah untuk tahap selanjutnya.",
    },
];

const chart = `
graph LR
    A[User] -->|Prompt: Topik| B(Perplexity AI)
    B -->|Search| C{Web Sources}
    C -->|30+ URLs| B
    B -->|List of URLs| A
    A -->|Copy| D[Clipboard]
    style A fill:#f1f5f9,stroke:#334155,stroke-width:2px
    style B fill:#dbeafe,stroke:#2563eb,stroke-width:2px
    style D fill:#f1f5f9,stroke:#334155,stroke-width:2px
`;

export default function Pillar1Page() {
    return (
        <>
            <div className="relative">
                <div className="absolute right-4 top-4 z-10 md:right-8 md:top-8">
                    <ImageModal src={getAssetPath("/images/pillar-1.png")} alt="Visualisasi Pillar 1" />
                </div>
                <WorkflowStep
                    number={1}
                    title="Akuisisi Data Masif"
                    description="Filosofi: Jangan mulai dari kertas kosong. Gunakan AI untuk mengumpulkan bahan baku berkualitas tinggi dalam hitungan detik."
                    steps={steps}
                    color="blue"
                    icon={Search}
                />
            </div>
            <div className="container mx-auto px-4 md:px-6 pb-20">
                <h3 className="text-2xl font-bold text-center mb-6 text-slate-800">Visualisasi Alur Kerja (Teknis)</h3>
                <MermaidDiagram chart={chart} />
            </div>
        </>
    );
}

