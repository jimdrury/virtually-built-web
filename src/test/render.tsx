import { type RenderOptions, render } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";

import { fontVariables } from "@/lib/fonts";

function TestProviders({ children }: { children: ReactNode }) {
  return <div className={fontVariables}>{children}</div>;
}

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, { wrapper: TestProviders, ...options });
}
