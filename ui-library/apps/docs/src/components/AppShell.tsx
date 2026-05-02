"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', label: 'Dashboard', icon: '⌂' },
    { href: '/library', label: 'Component Library', icon: '▦' },
    { href: '/analytics', label: 'Analytics', icon: '◈' },
    { href: '/sessions', label: 'Sessions', icon: '✿' },
    { href: '/journal', label: 'Journal', icon: '▤' },
  ];

  return (
    <div className="app-shell flex bg-[#edeaf4] min-h-screen">
      {/* Sidebar */}
      <nav className="sidebar !hidden md:!flex">
        <div className="sidebar-logo">
          <div className="logo-mark">V</div>
          <span className="logo-text">VeraUI</span>
        </div>
        <div className="sidebar-nav">
          <span className="nav-section-label">Main</span>
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={`nav-item ${pathname === item.href ? 'active' : ''}`}>
              <span style={{ fontSize: 16 }}>{item.icon}</span> {item.label}
            </Link>
          ))}
          <span className="nav-section-label mt-4">Resources</span>
          <a className="nav-item" href="https://github.com/veramind/veraui" target="_blank" rel="noreferrer">
            <span style={{ fontSize: 16 }}>◎</span> GitHub
          </a>
          <a className="nav-item" href="/installation">
            <span style={{ fontSize: 16 }}>⚡</span> Installation
          </a>
        </div>
        <div className="sidebar-footer">
          <div className="list-item" style={{ padding: '12px 0 0' }}>
            <div className="list-avatar">AM</div>
            <div className="list-info">
              <div className="list-name" style={{ fontSize: 13 }}>Alexandra M.</div>
              <div className="list-sub">Pro Plan</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content flex-1">
        {/* Topbar */}
        <div className="topbar">
          <div className="topbar-title">VeraUI Workspace</div>
          <div className="topbar-search hidden lg:flex">
            <span style={{ color: 'var(--slate)', fontSize: 14 }}>⌕</span>
            <input placeholder="Search..." className="bg-transparent border-none outline-none text-sm text-plum w-full" />
          </div>
          <div className="topbar-actions hidden sm:flex">
            <div className="icon-btn">🔔</div>
            <div className="avatar">AM</div>
          </div>
        </div>

        {/* Page Body */}
        <div className="page-body">
          {children}
        </div>
      </div>
    </div>
  );
}
