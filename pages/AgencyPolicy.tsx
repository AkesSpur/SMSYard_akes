import React, { useState, useEffect } from 'react';
import { AgencyHeader } from '../components/AgencyHeader';
import { AgencyFooter } from '../components/AgencyFooter';
import { Shield, FileText, CreditCard, LifeBuoy, Code, Server, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AgencyPolicy: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleDownload = () => {
    // Placeholder for download logic if needed on this page
    window.location.href = '#/agencyspur';
  };

  return (
    <div className="min-h-screen bg-light-bgalt dark:bg-dark-bg text-primary-800 dark:text-dark-text transition-colors duration-300 font-sans">
      <AgencyHeader onDownload={handleDownload} theme={theme} toggleTheme={toggleTheme} />
      
      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <div className="mb-12">
          <Link 
            to="/agencyspur" 
            className="inline-flex items-center gap-2 text-sm font-medium text-agency-600 dark:text-agency-400 hover:underline mb-8"
          >
            <ArrowLeft size={16} />
            Back to Brand System
          </Link>
          <h1 className="font-agency font-bold text-4xl tracking-wide text-primary-900 dark:text-white uppercase mb-4">
            Agency<span className="text-agency-600 dark:text-agency-500">Spur</span> Policies
          </h1>
          <p className="text-light-text dark:text-dark-muted">
            Last updated: March 28, 2026. These policies govern all web development engagements with AgencySpur.
          </p>
        </div>

        <div className="space-y-12">
          {/* Service Terms */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-primary-900 dark:text-white">
              <div className="p-2 rounded-lg bg-agency-100 dark:bg-agency-900/30 text-agency-600 dark:text-agency-400">
                <FileText size={20} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Terms of Service</h2>
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none text-light-text dark:text-dark-muted leading-relaxed space-y-4">
              <p>
                By engaging AgencySpur for web development services, you agree to provide all necessary materials, feedback, and approvals in a timely manner. We reserve the right to adjust timelines if client delays occur.
              </p>
              <p>
                All projects are subject to a defined scope of work. Any requests outside this scope will be treated as additional work and billed accordingly.
              </p>
            </div>
          </section>

          {/* Payment Policy */}
          <section className="space-y-6 p-8 rounded-2xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm">
            <div className="flex items-center gap-3 text-primary-900 dark:text-white">
              <div className="p-2 rounded-lg bg-agency-100 dark:bg-agency-900/30 text-agency-600 dark:text-agency-400">
                <CreditCard size={20} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Payment Terms</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-agency-50 dark:bg-agency-900/20 border border-agency-100 dark:border-agency-800">
                <p className="font-semibold text-agency-700 dark:text-agency-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-agency-600 animate-pulse"></span>
                  Upfront Commitment
                </p>
                <p className="text-sm text-light-text dark:text-dark-muted mt-1">
                  A minimum of <span className="font-bold text-primary-900 dark:text-white">50% upfront payment</span> is required before any project commencement. For large-scale enterprise projects, this may increase based on resource allocation.
                </p>
              </div>
              <p className="text-light-text dark:text-dark-muted text-sm italic">
                Final payment is due upon project completion and before the final deployment or transfer of assets.
              </p>
            </div>
          </section>

          {/* Support Policy */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-primary-900 dark:text-white">
              <div className="p-2 rounded-lg bg-agency-100 dark:bg-agency-900/30 text-agency-600 dark:text-agency-400">
                <LifeBuoy size={20} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Support & Maintenance</h2>
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none text-light-text dark:text-dark-muted leading-relaxed">
              <p>
                Every project includes <span className="font-bold text-primary-900 dark:text-white">1 month of complimentary technical support</span> post-launch. This covers bug fixes and minor adjustments related to the original scope.
              </p>
              <p>
                Extended maintenance retainers are available upon request for ongoing updates, security patches, and feature enhancements.
              </p>
            </div>
          </section>

          {/* Source Code & Ownership */}
          <section className="space-y-6 p-8 rounded-2xl bg-primary-900 text-white border border-primary-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
              <Code size={120} />
            </div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="p-2 rounded-lg bg-white/10 text-agency-400">
                <Code size={20} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Source Code & Intellectual Property</h2>
            </div>
            <div className="space-y-6 relative z-10">
              <p className="text-slate-300 leading-relaxed">
                By default, AgencySpur retains ownership of the underlying source code, frameworks, and proprietary logic used to build your application. Clients are granted a perpetual license to use the compiled website/application.
              </p>
              
              <div className="grid md:grid-columns-2 gap-4">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-agency-400 font-bold mb-2">
                    <Server size={18} />
                    Full Ownership Transfer
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    If you require full access to the source code and complete intellectual property transfer, a <span className="text-white font-bold">300% buyout fee</span> of the initial website cost is applicable.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-agency-600/20 border border-agency-600/30 text-sm text-agency-200">
                <strong>Transfer Process:</strong> Upon payment of the buyout fee, your domain and all source materials will be transferred to your personal account on any server of your choice.
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-primary-900 dark:text-white">
              <div className="p-2 rounded-lg bg-agency-100 dark:bg-agency-900/30 text-agency-600 dark:text-agency-400">
                <Shield size={20} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Privacy Policy</h2>
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none text-light-text dark:text-dark-muted leading-relaxed">
              <p>
                We respect your privacy and the confidentiality of your business data. We do not share client information with third parties except as required to provide our services (e.g., hosting providers, domain registrars).
              </p>
              <p>
                Any data collected through our development process is used solely for the purpose of building and maintaining your digital products.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-24 pt-12 border-t border-light-border dark:border-dark-border text-center">
          <p className="text-sm text-light-text dark:text-dark-muted">
            Questions about our policies? Contact us at <a href="mailto:legal@agencyspur.com" className="text-agency-600 dark:text-agency-400 font-medium">legal@agencyspur.com</a>
          </p>
        </div>
      </main>

      <AgencyFooter />
    </div>
  );
};
