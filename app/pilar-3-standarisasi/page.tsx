"use client";

import { WorkflowStep } from "@/components/WorkflowStep";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { ImageModal } from "@/components/ImageModal";
import { FileText } from "lucide-react";

const steps = [
    {
        title: "Pindahkan ke Editor Markdown",
        description:
            "Pindahkan semua hasil sintesis (Source) ke editor yang mendukung Markdown untuk kerapihan struktur.",
    },
    {
        title: "Pilih Platform",
        description:
            "Gunakan platform yang mendukung ekspor bersih.",
        subSteps: [
            "Notion (Disarankan)",
            "Google Docs (Aktifkan 'Automatically detect markdown' di Tools > Preferences)",
            "Obsidian",
        ],
    },
    {
        title: "Finalisasi Dokumen",
        description:
            "Pastikan struktur heading (H1, H2, H3) rapi. Ini membantu AI memahami hierarki informasi.",
    },
    {
        title: "Ekspor ke PDF",
        description:
            "Ekspor dokumen yang sudah rapi tersebut menjadi file PDF. Format ini universal dan mudah dibaca oleh model AI.",
    },
];

const chart = `
graph LR
    A[User] -->|Paste Synthesis| B(Editor: Notion/Docs)
    B -->|Format Heading H1/H2| B
    B -->|Export| C[PDF File]
    C -->|Download| A
    style A fill:#f1f5f9,stroke:#334155,stroke-width:2px
    style B fill:#f3e8ff,stroke:#9333ea,stroke-width:2px
    style C fill:#fce7f3,stroke:#db2777,stroke-width:2px
`;

export default function Pillar3Page() {
    return (
        <>
            <div className="relative">
                <div className="absolute right-4 top-4 z-10 md:right-8 md:top-8">
                    <ImageModal src="/belajar/ai/images/pillar-3.jpg" alt="Visualisasi Pillar 3" />
                </div>
                <WorkflowStep
                    number={3}
                    title="Standarisasi Format Dokumen"
                    description="Filosofi: Format adalah kunci efisiensi. Siapkan dokumen yang bersih agar mudah 'dibaca' oleh model AI di tahap akhir."
                    steps={steps}
                    color="purple"
                    icon={FileText}
                />
            </div>
            <div className="container mx-auto px-4 md:px-6 pb-20">
                <h3 className="text-2xl font-bold text-center mb-6 text-slate-800">Visualisasi Alur Kerja (Teknis)</h3>
                <MermaidDiagram chart={chart} />
            </div>
        </>
    );
}
