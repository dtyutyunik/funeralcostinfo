import Link from 'next/link';
import { LAST_UPDATED, longDate } from '../lib/data';

export default function Byline({
  published,
  updated,
}: {
  published?: string;
  updated?: string;
}) {
  const upd = updated ?? LAST_UPDATED;
  return (
    <p className="byline">
      By <Link href="/about/">Dmitriy Tyutyunik</Link>
      {published && (
        <>
          <span aria-hidden="true"> · </span>
          Published {longDate(published)}
        </>
      )}
      {(!published || upd !== published) && (
        <>
          <span aria-hidden="true"> · </span>
          Updated {longDate(upd)}
        </>
      )}
      <span aria-hidden="true"> · </span>
      <Link href="/editorial-policy/">Editorial policy</Link>
    </p>
  );
}
