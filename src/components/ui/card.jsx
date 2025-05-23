
import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`bg-white/10 rounded-xl p-4 shadow-md backdrop-blur-sm ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
