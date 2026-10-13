import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[Dashboard Error Boundary]', error, errorInfo);
  }

  handleReload = () => {
    // Clear any broken query parameters and reload to clean overview
    window.location.href = window.location.pathname;
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#090a0f] text-slate-100 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-7 text-center shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle size={24} />
            </div>
            <h2 className="text-[17px] font-bold font-display text-white mb-2">
              Collections Intelligence Notice
            </h2>
            <p className="text-[12.5px] text-slate-400 mb-6 leading-relaxed">
              An unexpected render issue occurred while processing collections data. Click below to refresh the workspace.
            </p>
            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff5e3a] to-[#ff4d30] text-white text-[13px] font-semibold hover:opacity-95 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
            >
              <RotateCcw size={15} />
              <span>Reload Workspace</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
