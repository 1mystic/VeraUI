"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/installation', label: 'Installation', icon: 'bolt' },
    { href: '/components', label: 'Components', icon: 'category' },
    { href: '/sample-page', label: 'Sample Page', icon: 'view_quilt' },
    { href: 'https://github.com/veramind/veraui', label: 'GitHub', icon: 'code', external: true },
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
          <span className="nav-section-label">Navigation</span>
          {navItems.map(item => {
            if (item.external) {
              return (
                <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="nav-item">
                  <span className="material-icons" style={{ fontSize: 18 }}>{item.icon}</span> {item.label}
                </a>
              );
            }
            return (
              <Link key={item.href} href={item.href} className={`nav-item ${pathname === item.href ? 'active' : ''}`}>
                <span className="material-icons" style={{ fontSize: 18 }}>{item.icon}</span> {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content flex-1">
        {/* Topbar */}
        <div className="topbar">
          <div className="topbar-title">VeraUI Workspace</div>
          <div className="topbar-search hidden lg:flex">
            <span className="material-icons" style={{ color: 'var(--slate)', fontSize: 18 }}>search</span>
            <input placeholder="Search..." className="bg-transparent border-none outline-none text-sm text-plum w-full ml-2" />
          </div>
          <div className="topbar-actions hidden sm:flex">
            <div className="icon-btn flex items-center justify-center">
              <span className="material-icons" style={{ fontSize: 20 }}>notifications</span>
            </div>
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
