import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { CollageBackground } from '../common/CollageBackground';

export function TrajectorySection() {
  const { t } = useTranslation();

  const leadership = [
    {
      num: '01',
      tapeTag: '01 // SCIENTIFIC GOVERNANCE',
      role: t('TRAJECTORY.bernoulli_role', 'President'),
      org: t('TRAJECTORY.bernoulli_org', 'Bernoulli Hydraulics Scientific Club'),
      period: '2023 – 2025',
      type: t('TRAJECTORY.bernoulli_type', 'Leadership & Technical Mentorship'),
      bullets: [
        t('TRAJECTORY.bernoulli_b1', 'Elected to lead an executive committee of 15+ student engineers and 100+ active members.'),
        t('TRAJECTORY.bernoulli_b2', 'Designed and delivered technical masterclasses in EPANET 2.2 hydraulic modeling and ArcGIS Pro.'),
        t('TRAJECTORY.bernoulli_b3', 'Conducted hands-on IoT workshops interfacing Arduino microcontrollers with flow and pressure sensors.'),
        t('TRAJECTORY.bernoulli_b4', 'Coordinated technical field delegations to regional municipal water treatment plants and dam reservoirs.')
      ]
    },
    {
      num: '02',
      tapeTag: '02 // ENTERPRISE TELECOM',
      role: t('TRAJECTORY.huawei_role', 'Enterprise Telecommunications Intern'),
      org: t('TRAJECTORY.huawei_org', 'Huawei ICT Academy, Algiers'),
      period: '2024',
      type: t('TRAJECTORY.huawei_type', 'Enterprise Network Engineering'),
      bullets: [
        t('TRAJECTORY.huawei_b1', 'Mastered enterprise IP routing and switching protocols (OSPF, BGP, VLAN tagging, QoS).'),
        t('TRAJECTORY.huawei_b2', 'Analyzed data center network redundancy topologies and low-latency packet transmission architectures.'),
        t('TRAJECTORY.huawei_b3', 'Transferred enterprise network reliability principles directly to industrial SCADA and edge IoT sensor networks.')
      ]
    }
  ];

  const education = [
    {
      num: '03',
      tapeTag: '03 // MASTER OF SCIENCE (ENSH)',
      degree: t('TRAJECTORY.ms_degree', 'Master of Science (M.S.) — Water & Sanitation Services Management'),
      institution: t('TRAJECTORY.ms_inst', 'National Higher School of Hydraulics (ENSH)'),
      period: '2024 – Present',
      status: t('TRAJECTORY.ms_status', 'Enrolled'),
      detail: t(
        'TRAJECTORY.ms_detail',
        'Urban water cycle economics, wastewater treatment plant optimization, non-revenue water (NRW) reduction, sludge digestor treatment, and hydroinformatics computational methods.'
      )
    },
    {
      num: '04',
      tapeTag: '04 // BACHELOR OF SCIENCE',
      degree: t('TRAJECTORY.bs_degree', 'Bachelor of Science (B.S.) — Hydraulics Engineering'),
      institution: t('TRAJECTORY.bs_inst', 'Faculty of Civil & Hydraulic Engineering'),
      period: 'Graduated with Distinction',
      status: t('TRAJECTORY.bs_status', 'Graduated with Distinction'),
      detail: t(
        'TRAJECTORY.bs_detail',
        'Fluid mechanics, pressurized pipeline hydraulics, open-channel flow, hydrology, dam engineering, reinforced concrete for hydraulic structures, and soil mechanics.'
      )
    }
  ];

  return (
    <section
      id="trajectory"
      className="py-16 sm:py-24 border-b border-slate-200 dark:border-blue-500/20 bg-slate-50/50 dark:bg-[#07133f]/70 relative overflow-hidden"
    >
      <CollageBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-600 dark:text-cyan-400 bg-purple-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-purple-200 dark:border-blue-500/30">
              05 // {t('TRAJECTORY.section_tag', 'TRAJECTORY & ROOTS')}
            </span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              0101 / FLOW.DATA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-title tracking-tight text-slate-900 dark:text-white">
            {t('TRAJECTORY.section_title', 'Engineering Experience & Academic Roots')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t(
              'TRAJECTORY.section_desc',
              'Scientific club governance, enterprise telecommunication training, and accredited degrees in municipal water services and hydraulics.'
            )}
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Leadership */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-blue-500/30">
              <Briefcase className="w-5 h-5 text-fluid-blue dark:text-cyan-400" />
              <h3 className="text-lg font-bold font-title text-slate-900 dark:text-white tracking-tight">
                {t('TRAJECTORY.col_leadership', 'Leadership & Industry Training')}
              </h3>
            </div>

            <div className="space-y-5">
              {leadership.map((item) => (
                <div
                  key={item.num}
                  className="rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white/90 dark:bg-[#0A1B54]/80 p-6 shadow-md relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="inline-block mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-[11px] uppercase">
                      {item.tapeTag}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-500/30 text-fluid-blue dark:text-cyan-300 font-semibold">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-title text-slate-900 dark:text-white tracking-tight mt-1">
                    {item.role}
                  </h4>
                  <p className="text-xs text-fluid-blue dark:text-cyan-400 font-medium">
                    {item.org}
                  </p>

                  <ul className="mt-4 space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {item.bullets.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Academic Degrees */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-blue-500/30">
              <GraduationCap className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
              <h3 className="text-lg font-bold font-title text-slate-900 dark:text-white tracking-tight">
                {t('TRAJECTORY.col_education', 'Academic Credentials')}
              </h3>
            </div>

            <div className="space-y-5">
              {education.map((item) => (
                <div
                  key={item.num}
                  className="rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white/90 dark:bg-[#0A1B54]/80 p-6 shadow-md relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="inline-block mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-[11px] uppercase">
                      {item.tapeTag}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-semibold flex items-center gap-1.5">
                      <Award className="w-3 h-3 text-emerald-500" />
                      {item.status}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-title text-slate-900 dark:text-white tracking-tight mt-1">
                    {item.degree}
                  </h4>
                  <p className="text-xs text-emerald-600 dark:text-emerald-300 font-medium">
                    {item.institution}
                  </p>

                  <p className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrajectorySection;
