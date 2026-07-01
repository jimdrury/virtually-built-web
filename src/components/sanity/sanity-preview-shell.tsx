import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";

import { DisableDraftMode } from "@/components/sanity/disable-draft-mode";
import { SanityLive } from "@/sanity/live";

export async function SanityPreviewShell() {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <>
      <SanityLive includeDrafts={isDraftMode} />
      {isDraftMode ? (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      ) : null}
    </>
  );
}
