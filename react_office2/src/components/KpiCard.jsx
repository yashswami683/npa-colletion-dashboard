import { motion } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';

export default function KpiCard({
  label,
  value,
  raw,
  format,
  sub,
  dateRange,
  icon: Icon,
  tone = 'default',
  index = 0,
  trend,
  onClick,
  valueClassName = '',
}) {
  const toneMap = {
    default: {
      bg: 'bg-white hover:bg-slate-50/70',
      border: 'border-slate-200/90 hover:border-slate-300',
      accent: 'bg-slate-300',
      shadow: 'shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)]',
      icon: 'text-slate-600 bg-slate-100 border-slate-200',
      badge: 'text-slate-600 bg-slate-100 border-slate-200',
      value: 'text-slate-900',
    },
    live: {
      bg: 'bg-gradient-to-b from-emerald-50/60 via-white to-white',
      border: 'border-emerald-200/80 hover:border-emerald-400',
      accent: 'bg-gradient-to-r from-emerald-400 to-teal-500',
      shadow: 'shadow-[0_2px_12px_rgba(16,185,129,0.06)] hover:shadow-[0_8px_22px_rgba(16,185,129,0.14)]',
      icon: 'text-emerald-700 bg-emerald-100/80 border-emerald-200',
      badge: 'text-emerald-800 bg-emerald-100/90 border-emerald-300',
      value: 'text-slate-900',
    },
    amber: {
      bg: 'bg-gradient-to-b from-amber-50/60 via-white to-white',
      border: 'border-amber-200/80 hover:border-amber-400',
      accent: 'bg-gradient-to-r from-amber-400 to-orange-400',
      shadow: 'shadow-[0_2px_12px_rgba(245,158,11,0.06)] hover:shadow-[0_8px_22px_rgba(245,158,11,0.14)]',
      icon: 'text-amber-700 bg-amber-100/80 border-amber-200',
      badge: 'text-amber-800 bg-amber-100/90 border-amber-300',
      value: 'text-slate-900',
    },
    brand: {
      bg: 'bg-gradient-to-b from-orange-50/65 via-white to-white',
      border: 'border-orange-200/90 hover:border-orange-400',
      accent: 'bg-gradient-to-r from-[#ff5e3a] to-[#ff3b30]',
      shadow: 'shadow-[0_2px_12px_rgba(255,77,48,0.08)] hover:shadow-[0_8px_22px_rgba(255,77,48,0.16)]',
      icon: 'text-[#ff4d30] bg-orange-100/80 border-orange-200',
      badge: 'text-[#c23b22] bg-orange-100/90 border-orange-300',
      value: 'text-slate-900',
    },
    teal: {
      bg: 'bg-gradient-to-b from-teal-50/60 via-white to-white',
      border: 'border-teal-200/80 hover:border-teal-400',
      accent: 'bg-gradient-to-r from-teal-400 to-cyan-500',
      shadow: 'shadow-[0_2px_12px_rgba(20,184,166,0.06)] hover:shadow-[0_8px_22px_rgba(20,184,166,0.14)]',
      icon: 'text-teal-700 bg-teal-100/80 border-teal-200',
      badge: 'text-teal-800 bg-teal-100/90 border-teal-300',
      value: 'text-slate-900',
    },
    indigo: {
      bg: 'bg-gradient-to-b from-indigo-50/60 via-white to-white',
      border: 'border-indigo-200/80 hover:border-indigo-400',
      accent: 'bg-gradient-to-r from-indigo-500 to-purple-500',
      shadow: 'shadow-[0_2px_12px_rgba(99,102,241,0.06)] hover:shadow-[0_8px_22px_rgba(99,102,241,0.14)]',
      icon: 'text-indigo-700 bg-indigo-100/80 border-indigo-200',
      badge: 'text-indigo-800 bg-indigo-100/90 border-indigo-300',
      value: 'text-slate-900',
    },
    warn: {
      bg: 'bg-gradient-to-b from-amber-50/60 via-white to-white',
      border: 'border-amber-200/80 hover:border-amber-400',
      accent: 'bg-gradient-to-r from-amber-400 to-yellow-500',
      shadow: 'shadow-[0_2px_12px_rgba(245,158,11,0.06)] hover:shadow-[0_8px_22px_rgba(245,158,11,0.14)]',
      icon: 'text-amber-700 bg-amber-100 border-amber-200',
      badge: 'text-amber-800 bg-amber-100 border-amber-200',
      value: 'text-slate-900',
    },
    neutral: {
      bg: 'bg-gradient-to-b from-slate-50 via-white to-white',
      border: 'border-slate-200/90 hover:border-slate-300',
      accent: 'bg-slate-400',
      shadow: 'shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)]',
      icon: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      badge: 'text-indigo-700 bg-indigo-50 border-indigo-200',
      value: 'text-slate-900',
    },
  };

  const t = toneMap[tone] || toneMap.default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
      onClick={onClick}
      className={`group relative ${t.bg} backdrop-blur-xl border ${t.border} rounded-2xl p-4 sm:p-4.5 transition-all ${t.shadow} flex flex-col justify-between overflow-hidden ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      {/* Sleek Top Accent Gradient Line */}
      <div className={`absolute top-0 left-0 right-0 h-[2.5px] ${t.accent} transition-opacity`} />

      {/* Top row: Icon + Label + Badge */}
      <div className="flex items-start justify-between gap-1.5 pt-0.5">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {Icon && (
            <div className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 ${t.icon} shadow-2xs transition-colors`}>
              <Icon size={13} strokeWidth={2.4} />
            </div>
          )}
          <span className="text-[12px] font-bold text-slate-600 tracking-tight leading-snug line-clamp-1" title={label}>
            {label}
          </span>
        </div>

        {tone === 'live' ? (
          <span className="inline-flex items-center gap-1.5 text-[9.5px] sm:text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300 shrink-0 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {trend || 'Live'}
          </span>
        ) : trend ? (
          <span className={`text-[9.5px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border shrink-0 shadow-2xs ${t.badge}`}>
            {trend}
          </span>
        ) : null}
      </div>

      {/* Main Metric Value */}
      <div className="mt-2.5">
        <div className={`font-black ${t.value} tracking-tight font-display leading-tight truncate ${valueClassName || 'text-[23px] sm:text-[25px] xl:text-[26px]'}`}>
          {raw !== undefined ? <AnimatedNumber value={raw} format={format} /> : value}
        </div>

        {/* Dedicated Date Range Pill */}
        {dateRange && (
          <div className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md mt-1.5 border shadow-2xs ${
            tone === 'live'
              ? 'text-emerald-800 bg-emerald-100/80 border-emerald-300'
              : tone === 'amber'
              ? 'text-amber-800 bg-amber-100/80 border-amber-300'
              : tone === 'brand'
              ? 'text-[#c23b22] bg-orange-100/80 border-orange-300'
              : 'text-slate-700 bg-slate-100 border-slate-200'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse shrink-0" />
            <span className="truncate">{dateRange}</span>
          </div>
        )}

        {/* Subtitle / Context */}
        {sub && (
          <div className="text-[11px] font-medium text-slate-500 mt-1 truncate" title={sub}>
            {sub}
          </div>
        )}
      </div>
    </motion.div>
  );
}
