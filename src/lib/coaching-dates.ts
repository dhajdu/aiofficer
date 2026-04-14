export type CoachingDate = {
  iso: string;
  label: string;
};

export function getUpcomingCoachingDates(count = 3): CoachingDate[] {
  const now = new Date();
  const dates: CoachingDate[] = [];

  const base = new Date(now);
  let found = 0;
  let offset = 0;

  while (found < count && offset < 60) {
    const probe = new Date(base);
    probe.setUTCDate(probe.getUTCDate() + offset);
    const utcDow = probe.getUTCDay();

    if (utcDow === 4) {
      const sessionUtc = new Date(
        Date.UTC(
          probe.getUTCFullYear(),
          probe.getUTCMonth(),
          probe.getUTCDate(),
          4,
          30,
          0
        )
      );
      const cutoff = sessionUtc.getTime() - 24 * 60 * 60 * 1000;

      if (now.getTime() < cutoff) {
        dates.push({
          iso: sessionUtc.toISOString(),
          label: formatLabel(sessionUtc),
        });
        found++;
      }
    }
    offset++;
  }

  return dates;
}

function formatLabel(sessionUtc: Date): string {
  const gmt7 = new Date(sessionUtc.getTime() + 7 * 60 * 60 * 1000);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const m = months[gmt7.getUTCMonth()];
  const d = gmt7.getUTCDate();
  const y = gmt7.getUTCFullYear();
  return `Thursday, ${m} ${d}, ${y} · 11:30 AM GMT+7`;
}
