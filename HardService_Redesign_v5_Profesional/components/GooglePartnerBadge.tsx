type Props = {compact?: boolean};

/**
 * Google allows the Partner badge on websites only for eligible companies and
 * requires the official snippet / asset from the Google Partners account.
 * If you have the official URL or snippet, set NEXT_PUBLIC_GOOGLE_PARTNER_BADGE_URL.
 */
export default function GooglePartnerBadge({compact=false}:Props){
  const badgeUrl = process.env.NEXT_PUBLIC_GOOGLE_PARTNER_BADGE_URL;
  if (badgeUrl) {
    return (
      <div className={`google-partner-badge ${compact ? 'compact' : ''}`}>
        <img src={badgeUrl} alt="Google Partner badge" loading="lazy" decoding="async" />
      </div>
    );
  }
  return (
    <div className={`google-partner-badge placeholder ${compact ? 'compact' : ''}`} aria-label="Google Partner badge placeholder">
      <div className="gp-mark">Google</div>
      <div className="gp-copy">
        <strong>Partner</strong>
        {!compact && <small>Adaugă badge-ul oficial din Google Partners</small>}
      </div>
    </div>
  );
}
