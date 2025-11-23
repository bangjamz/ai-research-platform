"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
    chart: string;
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        mermaid.initialize({
            startOnLoad: false,
            theme: "base",
            themeVariables: {
                primaryColor: "#e2e8f0",
                primaryTextColor: "#0f172a",
                primaryBorderColor: "#94a3b8",
                lineColor: "#64748b",
                secondaryColor: "#f1f5f9",
                tertiaryColor: "#ffffff",
                fontSize: "16px",
            },
            flowchart: {
                curve: "stepAfter",
                padding: 20,
            },
            securityLevel: "loose",
        });
    }, []);

    useEffect(() => {
        if (isMounted && ref.current) {
            ref.current.removeAttribute("data-processed");
            ref.current.innerHTML = chart;
            mermaid.run({
                nodes: [ref.current],
            });
        }
    }, [chart, isMounted]);

    if (!isMounted) {
        return <div className="my-8 h-32 animate-pulse rounded-xl bg-slate-100" />;
    }

    return (
        <div className="my-8 flex justify-center overflow-x-auto rounded-xl bg-white p-6 shadow-sm border border-slate-100">
            <div ref={ref} className="mermaid w-full flex justify-center">
                {chart}
            </div>
        </div>
    );
}

