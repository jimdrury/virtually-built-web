export type SiteNavEvent = "openMenu" | "closeMenu";

type SiteNavListener = () => void;

const listeners = new Map<SiteNavEvent, Set<SiteNavListener>>();

function getListenerSet(event: SiteNavEvent): Set<SiteNavListener> {
  let set = listeners.get(event);
  if (!set) {
    set = new Set();
    listeners.set(event, set);
  }
  return set;
}

export const siteNavEmitter = {
  on(event: SiteNavEvent, listener: SiteNavListener): () => void {
    getListenerSet(event).add(listener);
    return () => {
      getListenerSet(event).delete(listener);
    };
  },

  emit(event: SiteNavEvent): void {
    for (const listener of getListenerSet(event)) {
      listener();
    }
  },
};
