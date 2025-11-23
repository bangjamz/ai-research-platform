"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
    title: string;
    description: string;
    subSteps?: string[];
}

interface WorkflowStepProps {
    number: number;
    title: string;
    description: string;
    steps: Step[];
    color: "blue" | "teal" | "purple" | "orange";
    icon: LucideIcon;
}

const colorStyles = {
    blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        stepBg: "bg-blue-600",
    },
    teal: {
        bg: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
        stepBg: "bg-teal-600",
    },
    purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        stepBg: "bg-purple-600",
    },
    orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        stepBg: "bg-orange-600",
    },
};

export function WorkflowStep({
    number,
    title,
    description,
    steps,
    color,
    icon: Icon,
}: WorkflowStepProps) {
    const styles = colorStyles[color];

    return (
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
            >
                <div
                    className={cn(
                        "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg",
                        styles.bg,
                        styles.text
                    )}
                >
                    <Icon size={40} />
                </div>
                <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
                    {title}
                </h1>
                <p className="mx-auto max-w-2xl text-xl text-slate-600">
                    {description}
                </p>
            </motion.div>

            <div className="mx-auto max-w-4xl">
                <div className="relative border-l-2 border-slate-200 pl-8 md:pl-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="mb-12 relative"
                        >
                            <div
                                className={cn(
                                    "absolute -left-[41px] md:-left-[57px] flex h-8 w-8 items-center justify-center rounded-full text-white font-bold text-sm ring-4 ring-white",
                                    styles.stepBg
                                )}
                            >
                                {index + 1}
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">
                                {step.title}
                            </h3>
                            <p className="mb-4 text-slate-600">{step.description}</p>
                            {step.subSteps && (
                                <ul className="list-disc space-y-2 pl-5 text-slate-600">
                                    {step.subSteps.map((subStep, subIndex) => (
                                        <li key={subIndex}>{subStep}</li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
