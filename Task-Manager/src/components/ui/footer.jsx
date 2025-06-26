import * as React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// --- Utility Function: cn ---
// This utility function is included directly in the component file
// to ensure it is resolved correctly within this self-contained immersive.
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Footer({
  className,
  companyName,
  year,
  links,
  ...props
}) {
  return (
    <footer
      data-slot="footer"
      className={cn(
        "bg-gray-900 text-gray-300 p-6 shadow-lg rounded-t-lg mt-8",
        className
      )}
      {...props}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="mb-4 md:mb-0 text-sm">
          &copy; {year} {companyName}. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm px-2 py-1 rounded-md"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export {
  Footer,
};
