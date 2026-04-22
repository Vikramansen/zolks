"use client";

import Image from "next/image";

type Provider = {
  name: string;
  logo: string;
  note?: string;
};

const PROVIDERS: Provider[] = [
  { name: "Anthropic", logo: "/logos/anthropic.svg" },
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "Gemini", logo: "/logos/gemini.svg" },
  { name: "Grok", logo: "/logos/grok.svg", note: "xAI" },
];

export function ProviderStrip() {
  return (
    <div className="provider-strip pt-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-faint">
        Supported providers
      </p>
      <ul className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
        {PROVIDERS.map((provider) => (
          <li
            key={provider.name}
            className="flex items-center gap-3 border border-border bg-bg-elevated px-3 py-2"
          >
            <Image
              src={provider.logo}
              alt={`${provider.name} logo`}
              width={16}
              height={16}
              className="opacity-90"
            />
            <div className="leading-tight">
              <p className="font-mono text-xs text-text">{provider.name}</p>
              {provider.note ? (
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-faint">
                  {provider.note}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
