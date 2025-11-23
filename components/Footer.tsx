export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 py-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-slate-900">
                            AI Research Workflow
                        </h3>
                        <p className="text-sm text-slate-500">
                            Metode Kurasi Pengetahuan untuk Hasil Riset yang Mendalam
                        </p>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-sm text-slate-500">
                            &copy; {new Date().getFullYear()} Dr. Indra Surya Permana, MM., M.Kom.
                        </p>
                        <p className="text-xs text-slate-400">
                            Smart Productivity Workflow
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
