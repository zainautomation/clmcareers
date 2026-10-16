"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

// Read the year on the client only, so the prerendered page stays static.
export default function Year() {
  const year = useSyncExternalStore(noop, () => new Date().getFullYear(), () => null);
  return <span>{year ?? "2026"}</span>;
}
