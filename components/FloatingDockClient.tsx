'use client';

import { IconMenu2, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import DynamicIcon from './DynamicIcon';

interface NavItem {
  title?: string | null;
  href?: string | null;
  icon?: string | null;
  isExternal?: boolean | null;
}

interface FloatingDockClientProps {
  navItems: NavItem[];
}

interface DockLink {
  title: string;
  href: string;
  icon: React.ReactNode;
  isExternal?: boolean | null;
  onClick?: () => void;
}

const MAX_VISIBLE_ITEMS_DESKTOP = 6;
const MAX_VISIBLE_ITEMS_MOBILE = 8;

const getVisibleLinks = (links: DockLink[], maxItems: number) => {
  const shouldShowMore = links.length > maxItems;
  return {
    shouldShowMore,
    visible: shouldShowMore ? links.slice(0, maxItems) : links,
    hidden: shouldShowMore ? links.slice(maxItems) : [],
  };
};

function FloatingDockClient({ navItems }: FloatingDockClientProps) {
  //   const { open, isMobile, openMobile } = useSideBar();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMoreMenuOpen, setDesktopMoreMenuOpen] = useState(false);
  const [mobileMoreMenuOpen, setMobileMoreMenuOpen] = useState(false);

  //   const isSidebarOpen = isMobile ? openMobile : open;

  const links: DockLink[] = [
    ...navItems.map((item) => ({
      title: item.title || '',
      href: item.href || '#',
      icon: <DynamicIcon iconName={item.icon || 'IconHome'} />,
      isExternal: item.isExternal,
    })),
  ];

  const desktop = getVisibleLinks(links, MAX_VISIBLE_ITEMS_DESKTOP);
  const mobile = getVisibleLinks(links, MAX_VISIBLE_ITEMS_MOBILE);

  return (
    <>
      <div className="hidden md:block fixed z-30 transition-all duration-300 pointer-events-none group/dock bottom-4 md:left-4 md:translate-x-0 lg:left-1/2">
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl md:rounded-2xl bg-white/20 dark:bg-black/30 hover:bg-white/30 dark:hover:bg-black/40 backdrop-blur-xl border border-white/30 dark:border-white/20 hover:border-white/40 dark:hover:border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] pointer-events-auto transition-all duration-300">
          {desktop.visible.map((item) => (
            <DockIcon
              key={`${item.title}-${item.href}`}
              item={item}
              isVertical={false}
            />
          ))}

          {desktop.shouldShowMore && (
            <div className="relative">
              <button
                type="button"
                onClick={() => setDesktopMoreMenuOpen(!desktopMoreMenuOpen)}
                className="group relative flex items-center justify-center w-12 h-12 md:w-12 md:h-12"
              >
                <div className="relative flex items-center justify-center w-full h-full rounded-full bg-white/10 dark:bg-white/5 group-hover/dock:bg-white/40 dark:group-hover/dock:bg-white/20 backdrop-blur-md border-white/20 dark:border-white/10 group-hover/dock:border-white/50 dark:group-hover/dock:border-white/30 transition-all duration-500 ease-out hover:scale-125 hover:translate-y-2 md:hover:translate-y-3 hover:bg-white/50! dark:hover:bg-white/30! hover:border-white-70! dark:hover:border-white/40! hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                  <div className="w-6 h-6 md:w-6 md:h-6 text-neutral-400/60 group-hover/dock:text-neutral-500 dark:text-neutral-300/60 dark:group-hover/dock:text-neutral-300 group-hover:text-neutral-600! dark:group-hover:text-neutral-200! transition-colors duration-300">
                    {desktopMoreMenuOpen ? (
                      <IconX className="w-6 h-6" />
                    ) : (
                      <IconMenu2 className="w-6 h-6" />
                    )}
                  </div>
                </div>

                <div className="absolute -top-9 md:-top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/40 dark:border-white/20 text-xs md:text-sm font-medium text-neutral-800 dark:text-neutral-200 whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
                  More
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-white/90 dark:bg-black/90 border-r border-b border-white/40 dark:border-white/20" />
                </div>
              </button>

              {desktopMoreMenuOpen && (
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-100 flex flex-col-reverse gap-2 p-3 rounded-xl bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/40 dark:border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] animate-in slide-in-from-bottom-2 duration-200">
                  {desktop.hidden.map((item) => (
                    <DockIcon
                      key={`${item.title}-${item.href}-more`}
                      item={item}
                      isVertical={true}
                      onItemClick={() => setDesktopMoreMenuOpen(false)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile: Hamburger menu bottom at top right */}
      <div className="md:hidden fixed top-4 right-4 z-30">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-12 h-12 rounded-full bg-white/20 dark:bg-black/30 hover:bg-white/30 dark:hover:bg-black/40 backdrop-blur-xl border border-white/30 dark:border-white/20 hover:border-white/40 dark:hover:border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] flex items-center justify-center text-neutral-500 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-neutral-200 transition-all duration-300"
        >
          {mobileMenuOpen ? (
            <IconX className="w-6 h-6" />
          ) : (
            <IconMenu2 className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Vetical Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-14 right-0 z-100 flex flex-col gap-2 p-3 rounded-xl bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/40 dark:border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] animate-in slide-in-from-top-2 duration-200">
            {mobile.visible.map((item) => (
              <DockIcon
                key={`${item.title}-${item.href}-mobile`}
                item={item}
                isVertical={true}
                onItemClick={() => setMobileMenuOpen(false)}
              />
            ))}

            {/* Mobile More Menu Button */}
            {mobile.shouldShowMore && (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setMobileMoreMenuOpen(!mobileMoreMenuOpen)}
                  className="group relative flex items-center justify-center w-12 h-12"
                >
                  <div className="relative flex items-center justify-center w-full h-full rounded-full bg-white/25 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/20 transition-all duration-300 hover:scale-110 hover:bg-gray-500/10 dark:hover:border-white/30">
                    <div className="w-6 h-6 text-neutral-500 dark:text-neutral-300">
                      {mobileMoreMenuOpen ? (
                        <IconX className="w-6 h-6" />
                      ) : (
                        <IconMenu2 className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  {/* Tooltip */}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default FloatingDockClient;
