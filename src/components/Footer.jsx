import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const footerColumns = [
  {
    title: "Features",
    links: [
      { label: "Tasks", to: "/features/tasks" },
      { label: "Chat", to: "/features/chat" },
      { label: "Team", to: "/features/team" },
      { label: "Integrations", to: "/features/integrations" },
      { label: "Calendar", to: "/features/calendar" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Product Development", to: "/solutions/product-development" },
      { label: "Enterprise", to: "/solutions/enterprise" },
      { label: "Project Management", to: "/solutions/project-management" },
      { label: "Sales/CRM", to: "/solutions/crm" },
      { label: "Marketing", to: "/solutions/marketing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "/resources/blog" },
      { label: "Documentation", to: "/resources/docs" },
      { label: "Video", to: "/resources/tutorials" },
      { label: "Book Demo", to: "/book-demo" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/karyaup/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/karyaup_?igsh=cHczemR2dmRxdWhx",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection((current) => (current === title ? null : title));
  };

  return (
    <footer className="border-t border-gray-200 bg-white pt-8 pb-6 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section: Logo + Nav columns */}
        <div className="mb-8 flex flex-col gap-8 lg:flex-row lg:gap-16">
          {/* Logo block */}
          <div className="flex justify-center sm:justify-start lg:flex-shrink-0 lg:w-48">
            <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
              <a href="/#hero-section" className="inline-flex items-center">
                <img
                  src={logo}
                  alt="KaryaUp Logo"
                  className="h-12 w-auto sm:h-14"
                />
              </a>
              <p className="text-[13px] font-medium leading-snug text-slate-600">
                <span className="mb-0.5 block font-bold tracking-tight text-purple-600">
                  KaryaUp
                </span>
                From Sanskrit <span className="italic opacity-90">"Karya"</span>
                <br />
                meaning action or work.
              </p>
            </div>
          </div>

          {/* Desktop nav columns — hidden on mobile */}
          <div className="hidden flex-1 sm:grid sm:grid-cols-3 sm:gap-x-8 lg:gap-x-12">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h5 className="mb-3 text-base font-bold text-gray-900">
                  {column.title}
                </h5>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-gray-500 transition-colors duration-200 hover:text-purple-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile accordion — all 3 columns, shown only on mobile */}
          <div className="sm:hidden w-full">
            {footerColumns.map((column) => {
              const isOpen = openSection === column.title;
              return (
                <div key={column.title} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => toggleSection(column.title)}
                    className="flex w-full items-center justify-between py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-gray-900">
                      {column.title}
                    </span>
                    <span
                      className="text-xl leading-none text-gray-400 transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        display: "inline-block",
                      }}
                    >
                      +
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? "500px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <ul className="pb-4 space-y-3">
                      {column.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            to={link.to}
                            className="text-sm text-gray-500 transition-colors duration-200 hover:text-purple-600"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Social icons */}
        <div className="mb-6 flex flex-wrap justify-center gap-3 sm:justify-start">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-200 hover:bg-purple-100 hover:text-purple-600"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 border-t border-gray-200 pt-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-gray-400">
            &copy; 2026 KaryaUp. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 sm:gap-6">
            <Link
              to="/disclaimer"
              className="transition-colors duration-200 hover:text-purple-600"
            >
              Disclaimer
            </Link>
            <Link
              to="/privacy-policy"
              className="transition-colors duration-200 hover:text-purple-600"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="transition-colors duration-200 hover:text-purple-600"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
