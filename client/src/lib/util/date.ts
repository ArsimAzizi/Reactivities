const displayFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
});

/** Human-friendly date for display, e.g. "26 Dec 2026, 21:54". Falls back to the raw value. */
export function formatDate(date: string): string {
    const parsed = new Date(date);
    return Number.isNaN(parsed.getTime()) ? date : displayFormatter.format(parsed);
}

/** Value for an <input type="datetime-local">, which expects "yyyy-MM-ddTHH:mm". */
export function toDateTimeLocalValue(date?: string): string {
    return date ? date.slice(0, 16) : '';
}
