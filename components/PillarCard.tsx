"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PillarCardProps {
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    color: "blue" | "teal" | "purple" | "orange";
    href: string;
    index: number;
}

const colorStyles = {
    blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:border-blue-400",
        iconBg: "bg-blue-100",
    },
    teal: {
        bg: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
        hover: "hover:border-teal-400",
        iconBg: "bg-teal-100",
    },
    purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:border-purple-400",
        iconBg: "bg-purple-100",
    },
    orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:border-orange-400",
        iconBg: "bg-orange-100",
    },
};

export function PillarCard({
    title,
    subtitle,
    description,
    icon: Icon,
    color,
    href,
    index,
}: PillarCardProps) {
    const styles = colorStyles[color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Link href={href} className="block h-full">
                <div
                    className={cn(
                        "group relative h-full overflow-hidden rounded-2xl border bg-white p-6 transition-all hover:shadow-lg",
                        styles.border,
                        styles.hover
                    )}
                >
                    <div
                        className={cn(
                            "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl",
                            styles.iconBg,
                            styles.text
                        )}
                    >
                        <Icon size={24} />
                    </div>

                    <h3 className="mb-1 text-xl font-bold text-slate-900">{title}</h3>
                    <p className={cn("mb-4 text-sm font-medium", styles.text)}>
                        {subtitle}
                    </p>
                    <p className="mb-6 text-sm text-slate-600">{description}</p>

                    <div className="flex items-center text-sm font-semibold text-slate-900">
                        Pelajari Selengkapnya
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
