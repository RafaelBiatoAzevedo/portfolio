export function readPreference(key: string, fallback: string) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

export function savePreference(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Preferences remain available in memory when browser storage is disabled.
  }
}
