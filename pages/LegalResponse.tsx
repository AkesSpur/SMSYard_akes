import React, { useEffect } from 'react';
import { AgencyLogoMark } from '../components/AgencyLogoMark';
import { Printer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LegalResponse: React.FC = () => {

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-zinc-900 transition-colors duration-300 font-sans print:bg-white">
      {/* Navigation - Hidden on Print */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 z-50 print:hidden">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/agencyspur" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-agency-600 transition-colors">
            <ArrowLeft size={16} />
            Back to Brand System
          </Link>
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-agency-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-agency-700 transition-all shadow-sm"
            >
              <Printer size={16} />
              Print / Save as PDF
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 flex justify-center print:pt-0 print:pb-0 print:px-0">
        {/* Letter Container */}
        <div className="w-full max-w-[800px] bg-white dark:bg-zinc-950 shadow-2xl print:shadow-none border border-slate-200 dark:border-zinc-800 print:border-none p-12 md:p-20 min-h-[1056px] relative overflow-hidden">
          
          {/* Letterhead Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-agency-600/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none print:hidden"></div>
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 border-b border-slate-100 dark:border-zinc-800 pb-12 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AgencyLogoMark size={32} className="text-agency-600" />
                <span className="font-agency font-bold text-2xl tracking-wide text-zinc-900 dark:text-white uppercase">
                  Agency<span className="text-agency-600">Spur</span>
                </span>
              </div>
              <div className="text-sm text-slate-500 dark:text-zinc-400 space-y-1">
                <p>Software Development Agency</p>
                <p>www.agencyspur.com</p>
                <p>+7 951 569 58 75</p>
              </div>
            </div>
            <div className="text-right md:text-right text-sm text-slate-500 dark:text-zinc-400">
              <p className="font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-2">Formal Correspondence</p>
              <p>Date: 8th April 2026</p>
              <p>Ref: LR-2026-04-08</p>
            </div>
          </div>

          {/* Recipient */}
          <div className="mb-12 space-y-1 text-zinc-800 dark:text-zinc-200">
            <p className="font-bold">To: B.I Okunika,</p>
            <p>Femi Emmanuel Emodamori & Co.</p>
            <p className="text-agency-600 dark:text-agency-400">femiemmanuelemodamori@yahoo.com</p>
          </div>

          {/* Subject */}
          <div className="mb-10">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white border-l-4 border-agency-600 pl-4 py-1 uppercase tracking-tight">
              Subject: Re: Letter of Demand – Grandlinks Technologies Hub Limited
            </h2>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-6 text-[15px]">
            <p>Dear B.I Okunika,</p>
            
            <p>
              I am writing in response to your letter dated 8th April 2026, on behalf of your client, Grandlinks Technologies Hub Limited. I reject the allegations of breach of contract and am providing the following facts to permanently close this matter.
            </p>

            <div className="space-y-6">
              <section>
                <h3 className="text-zinc-900 dark:text-white font-bold mb-2">1. Delivery of All Assets</h3>
                <p>
                  The web development project was successfully completed, and the functional site was delivered on 07/03/2026. Regarding your demand that the source code, database, and all other deliverables be released to your client within forty-eight hours, this demand is moot. All source code files and the database were fully transferred to a server under your client's exclusive control on 05/04/2026. Your client already has full possession and operational control of the platform.
                </p>
              </section>

              <section>
                <h3 className="text-zinc-900 dark:text-white font-bold mb-2">2. Intellectual Property Rights</h3>
                <p>
                  While your client has full physical access to the files on their server to run their business, I must formally reiterate my position regarding the "absolute ownership" you demanded. Under copyright law, as the creator, I retain the Intellectual Property (IP) rights to the underlying source code because no formal Assignment of Rights was ever agreed upon or executed. Your client has the files and a license to use the system, but I maintain the legal IP rights to the code I authored.
                </p>
              </section>

              <section>
                <h3 className="text-zinc-900 dark:text-white font-bold mb-2">3. Refusal of Unpaid Labor</h3>
                <p>
                  Your letter demands that I remain obliged to make future modifications, changes, or corrections from time to time without any additional cost. I categorically reject this demand. I have been voluntarily making changes for your client since the completion date of 07/03/2026 in good faith. However, I am under no obligation to provide free, indefinite labor or maintenance.
                </p>
              </section>

              <section>
                <h3 className="text-zinc-900 dark:text-white font-bold mb-2">4. Refusal of New Contracts and Termination of Services</h3>
                <p>
                  You have demanded that a new agreement be executed between myself and your client within seven days to guide subsequent relationships. Please be advised that I will not be signing any new agreements, contracts, or documents of any kind.
                </p>
                <p>
                  I have fully delivered the functional platform your client paid for, and they are in possession of the files on their own hosting infrastructure. In light of the legal threats presented in your letter, I am formally terminating my working relationship with Grandlinks Technologies Hub Limited, effective immediately. I am walking away from this project and will not be providing any further services, updates, or correspondence.
                </p>
              </section>
            </div>

            <p className="font-bold text-zinc-900 dark:text-white mt-8">
              Govern yourselves accordingly.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-16 pt-12 border-t border-slate-100 dark:border-zinc-800">
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">Yours faithfully,</p>
            <div className="space-y-1">
              <p className="font-bold text-zinc-900 dark:text-white text-lg">SPURDIGITAL Enterprise</p>
              <p className="text-sm text-slate-500 dark:text-zinc-400">+7 951 569 58 75</p>
            </div>
          </div>

          {/* Footer Decor */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-agency-600"></div>
        </div>
      </main>

      {/* Print Instructions - Hidden on Print */}
      <div className="max-w-5xl mx-auto px-6 pb-24 text-center print:hidden">
        <p className="text-slate-500 dark:text-zinc-400 text-sm">
          Tip: Use the "Print" button above and select "Save as PDF" in your browser's print dialog to generate a PDF file.
        </p>
      </div>
    </div>
  );
};
