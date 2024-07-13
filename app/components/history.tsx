"use client";

import { useSearch } from "@/providers/search-provider";
import "./history.css";

export default function History() {
  const { searches } = useSearch();

  return (
    <div className="history-container">
      <p className="history-title">Searches</p>

      {searches.map((search, index) => (
        <p key={index} className="history-item">
          {search}
        </p>
      ))}
    </div>
  );
}
