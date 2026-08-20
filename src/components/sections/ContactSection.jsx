import React, { useState } from 'react';
import { Mail, Send, Copy, Check, FileText, Globe, Clock, Github, Linkedin, MessageSquare, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    domain: 'Hydraulic Modeling & EPANET',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text, fieldKey) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldKey);
      setTimeout(() => setCopiedField(null), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormSubmitted(true);
  };

  const handleDownloadResume = () => {
    const resumeText = `MOHAMED BAATAS - HYDROINFORMATICS ENGINEER
==================================================
Location: ${CONTACT_INFO.location}
Email: ${CONTACT_INFO.email}
GitHub: ${CONTACT_INFO.socials.github}
LinkedIn: ${CONTACT_INFO.socials.linkedin}
Telegram: ${CONTACT_INFO.socials.telegram}

ACADEMIC QUALIFICATIONS:
- Master of Science (M.S.) in Water & Sanitation Services Management
- Bachelor of Science (B.S.) in Hydraulics Engineering

CORE COMPETENCIES:
- Hydraulic Modeling: EPANET 2.2, Hazen-Williams, ArcGIS Pro, Civil 3D
- Embedded IoT & SCADA: ESP32, Arduino C++, Blynk IoT, MQTT, PID Control
- Software Architecture: Python 3, FastAPI, React 18, SQLite, PostgreSQL

COMMERCIAL & SCIENTIFIC PROJECTS:
- Smart Water Potabilization Plant SCADA Testbed
- 45+ km Municipal Drinking Water Distribution EPANET Model
- WaterFit Hydration & Biometric Telemetry Microservice
- Maktabi POS & Al-Quds Gym Manager Commercial Systems
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mohamed_Baatas_Hydroinformatics_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const channels = [
    { key: 'email', label: 'Direct Email', value: CONTACT_INFO.email, icon: <Mail className="w-4 h-4 text-cobalt-400" /> },
    { key: 'github', label: 'GitHub Repository', value: CONTACT_INFO.socials.github, icon: <Github className="w-4 h-4 text-slate-300" /> },
    { key: 'linkedin', label: 'LinkedIn Network', value: CONTACT_INFO.socials.linkedin, icon: <Linkedin className="w-4 h-4 text-cobalt-400" /> },
    { key: 'telegram', label: 'Telegram Direct', value: CONTACT_INFO.socials.telegram, icon: <Send className="w-4 h-4 text-cyan-400" /> }
  ];

  return (
    <section id="contact" className="py-20 border-b border-border-slate/80 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="DISPATCH_CHANNEL"
          title="Direct Engineering Inquiry & Contact"
          description="Initiate discussions regarding hydraulic network modeling, municipal SCADA telemetry consulting, or technical software architecture."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Channels & Telemetry Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="space-y-4">
              <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Verified Engineering Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Direct channels for technical inquiries, project proposals, and professional correspondence.
              </p>

              <div className="space-y-3 pt-2">
                {channels.map((ch) => (
                  <div key={ch.key} className="p-3 rounded bg-elevated-slate/70 border border-border-slate flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {ch.icon}
                      <div className="min-w-0">
                        <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">{ch.label}</span>
                        <span className="block text-xs font-mono text-slate-200 truncate">{ch.value}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(ch.value, ch.key)}
                      className="p-1.5 rounded bg-surface-sunken hover:bg-slate-700 text-slate-300 border border-border-slate shrink-0 transition-colors"
                      title={`Copy ${ch.label}`}
                    >
                      {copiedField === ch.key ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                ))}
              </div>

              {/* Station Telemetry */}
              <div className="pt-4 border-t border-border-slate/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-cobalt-400" /> {CONTACT_INFO.location}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-emerald-400" /> {CONTACT_INFO.timezone}</span>
              </div>

              {/* Resume Export CTA */}
              <div className="pt-2">
                <button
                  onClick={handleDownloadResume}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate font-mono text-xs font-semibold transition-colors"
                >
                  <FileText className="w-4 h-4 text-cobalt-400" />
                  <span>Download Mohamed Baatas Resume (CV)</span>
                </button>
              </div>
            </Card>
          </div>

          {/* Right Column: Engineering Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card>
              <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-cobalt-400" />
                Technical Inquiry Form
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Submit project specifications or consultation scope. Telemetry payload sent securely.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-900/60 border border-emerald-500 flex items-center justify-center text-emerald-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white font-mono text-sm">INQUIRY DISPATCHED</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="text-white font-semibold">{formState.name}</span>. Your engineering inquiry regarding <span className="text-emerald-400 font-mono">{formState.domain}</span> has been queued. You will receive a direct reply at <span className="text-white font-mono">{formState.email}</span>.
                  </p>
                  <button
                    onClick={() => { setFormSubmitted(false); setFormState({ name: '', email: '', domain: 'Hydraulic Modeling & EPANET', message: '' }); }}
                    className="mt-2 px-4 py-1.5 rounded bg-elevated-slate text-xs font-mono text-slate-300 border border-border-slate hover:bg-slate-700"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                        Name / Entity *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Dr. Amina K. / Municipal Water Auth"
                        className="w-full px-3 py-2 rounded bg-surface-sunken border border-border-slate text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cobalt-500 font-mono text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="engineer@institution.org"
                        className="w-full px-3 py-2 rounded bg-surface-sunken border border-border-slate text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cobalt-500 font-mono text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                      Engineering Domain / Scope
                    </label>
                    <select
                      value={formState.domain}
                      onChange={(e) => setFormState({ ...formState, domain: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-surface-sunken border border-border-slate text-slate-200 focus:outline-none focus:border-cobalt-500 font-mono text-xs"
                    >
                      <option value="Hydraulic Modeling & EPANET">Hydraulic Modeling & EPANET Network Simulation</option>
                      <option value="IoT SCADA & Embedded Testbeds">IoT SCADA Automation & Embedded Sensor Loops</option>
                      <option value="Custom Engineering Software">Custom Engineering Software & Scientific Pipelines</option>
                      <option value="Full-Time Hydroinformatics Role">Full-Time Hydroinformatics / Software Role</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                      Technical Scope & Specifications *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Outline project requirements, network parameters, timeline, or consultation objectives..."
                      className="w-full px-3 py-2 rounded bg-surface-sunken border border-border-slate text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cobalt-500 font-mono text-xs leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-cobalt-600 hover:bg-cobalt-500 text-white font-mono text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch Inquiry Payload</span>
                  </button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
