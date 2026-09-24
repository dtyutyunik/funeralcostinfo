import Link from 'next/link';
import { LAST_UPDATED, longDate } from '../lib/data';

export default function Byline() {
  return (
    <p className="byline">
      By <Link href="/about/">FuneralCostInfo</Link>
      <span aria-hidden="true"> · </span>
      Updated {longDate(LAST_UPDATED)}
      <span aria-hidden="true"> · </span>
      <Link href="/editorial-policy/">Editorial policy</Link>
    </p>
  );
}
