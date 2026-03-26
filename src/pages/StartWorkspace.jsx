import React, { useEffect } from "react";

const clickupUrl = "https://clickup.com";

export default function StartWorkspace() {
  useEffect(() => {
    window.location.replace(clickupUrl);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 text-center">
      <div>
        <p className="text-lg font-semibold text-slate-900">Redirecting to ClickUp...</p>
        <a
          href={clickupUrl}
          className="mt-4 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white"
        >
          Continue
        </a>
      </div>
    </div>
  );
}
