/**
 * Hard Service animated hero (v18).
 * All composition layers are real SVG elements — no flattened background image.
 * Uses approved local brand image files. Example figures are illustrative only.
 */
export default function JourneyFlow() {
  return (
    <div className="hs18-wrap">
      <svg
        className="hs18-art"
        viewBox="0 0 720 790"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="hs18-title hs18-desc"
      >
        <title id="hs18-title">De la o căutare Google la o cerere de ofertă</title>
        <desc id="hs18-desc">
          Telefon cu o căutare pentru servicii promovare, anunț sponsorizat, carduri animate cu rezultate orientative,
          evoluție ilustrativă a campaniilor și siglele Google Ads, Meta și TikTok.
        </desc>
        <defs>
          <linearGradient id="hs18-sky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fbfdff" />
            <stop offset="56%" stopColor="#eef6ff" />
            <stop offset="100%" stopColor="#f9fcff" />
          </linearGradient>
          <linearGradient id="hs18-phone-frame" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2e4662" />
            <stop offset="25%" stopColor="#08111e" />
            <stop offset="78%" stopColor="#15263b" />
            <stop offset="100%" stopColor="#647d9e" />
          </linearGradient>
          <linearGradient id="hs18-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#86b9ff" />
            <stop offset="100%" stopColor="#2169e9" />
          </linearGradient>
          <linearGradient id="hs18-bars" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#87b9ff" />
            <stop offset="100%" stopColor="#1768e9" />
          </linearGradient>
          <linearGradient id="hs18-graph-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7cb5ff" stopOpacity=".31" />
            <stop offset="100%" stopColor="#7cb5ff" stopOpacity=".025" />
          </linearGradient>
          <filter id="hs18-shadow" x="-35%" y="-35%" width="170%" height="180%">
            <feDropShadow dx="0" dy="13" stdDeviation="13" floodColor="#2b5f9e" floodOpacity=".17" />
          </filter>
          <filter id="hs18-shadow-soft" x="-35%" y="-35%" width="170%" height="175%">
            <feDropShadow dx="0" dy="6" stdDeviation="9" floodColor="#2b5f9e" floodOpacity=".10" />
          </filter>
          <clipPath id="hs18-phone-clip">
            <rect x="143" y="52" width="328" height="580" rx="35" />
          </clipPath>
          {/* The typing mask is animated independently, without moving the phone. */}
          <clipPath id="hs19-typing-clip" clipPathUnits="userSpaceOnUse">
            <rect className="hs19-typing-window" x="185" y="159" width="150" height="27" />
          </clipPath>
        </defs>

        {/* Background: diagonal light shafts and rising arrow, all behind the content. */}
        <rect width="720" height="790" rx="22" fill="url(#hs18-sky)" />
        <path d="M-90 350 L350 -90" fill="none" stroke="#fff" strokeWidth="98" opacity=".72" />
        <path d="M-45 750 L470 210" fill="none" stroke="#d6e8ff" strokeWidth="100" opacity=".22" />
        <ellipse cx="560" cy="574" rx="184" ry="163" fill="#bad7ff" opacity=".29" />
        <path d="M477 154 L537 89 L571 120 L667 28" stroke="#93beff" strokeWidth="23" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity=".72" />
        <path d="M632 27 L675 18 L673 64" fill="none" stroke="#93beff" strokeWidth="23" strokeLinejoin="round" strokeLinecap="round" opacity=".72" />

        {/* The phone is the central layer and always remains visible behind the smaller cards. */}
        <g className="hs19-phone-bob">
          <g transform="rotate(-2.5 308 338)" filter="url(#hs18-shadow)">
            <rect x="134" y="42" width="347" height="602" rx="43" fill="url(#hs18-phone-frame)" />
            <rect x="141" y="49" width="333" height="588" rx="38" fill="#fff" />
            <rect x="145" y="53" width="325" height="580" rx="35" fill="#fdfefe" />
            <rect x="249" y="43" width="114" height="23" rx="0" fill="#09121d" />
            <circle cx="346" cy="53" r="4.5" fill="#26415f" />
            <g clipPath="url(#hs18-phone-clip)">
              <text x="218" y="123" fontSize="43" fontFamily="Arial,sans-serif" fontWeight="700" letterSpacing="-2">
                <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
              </text>
              <rect x="165" y="153" width="279" height="47" rx="23" fill="#fff" stroke="#dbe4f2" strokeWidth="1.3" />
              <text x="185" y="182" fontFamily="Arial,sans-serif" fontSize="16" fill="#304767" clipPath="url(#hs19-typing-clip)">servicii promovare</text>
              <path className="hs19-search-caret" d="M185 163v20" stroke="#3075e9" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true" />
              <rect className="hs19-search-button" x="399" y="154" width="44" height="45" rx="14" fill="#2878ed" />
              <circle cx="419" cy="173" r="8" fill="none" stroke="#fff" strokeWidth="2.4" />
              <path d="M425 179l6 6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
              <text x="177" y="225" fontSize="12" fontWeight="700" fill="#1769e9">Toate</text>
              <text x="237" y="225" fontSize="11.5" fill="#607590">Imagini</text>
              <text x="306" y="225" fontSize="11.5" fill="#607590">Videoclipuri</text>
              <text x="401" y="225" fontSize="11.5" fill="#607590">Știri</text>
              <path d="M168 232h40" stroke="#1769e9" strokeWidth="3" strokeLinecap="round" />
              <path d="M164 237h282" stroke="#e8eef7" />
              <text x="170" y="285" fontSize="12.5" fill="#58728f">companie.ro</text>
              <text className="hs19-result-reveal" x="170" y="316" fontSize="18" fill="#185fb8" fontWeight="700">Servicii de promovare online</text>
              <text className="hs19-result-reveal" x="170" y="339" fontSize="18" fill="#185fb8" fontWeight="700">pentru firme</text>
              <text x="170" y="367" fontSize="13.5" fill="#5c718a">Google Ads · Meta Ads · TikTok Ads</text>
              <text x="170" y="388" fontSize="13.5" fill="#5c718a">Mai multe contacte și vânzări.</text>
              <path d="M170 409h262" stroke="#e6edf7" />
              <text x="170" y="448" fontSize="12.5" fill="#6a8299">Exemplu de rezultat sponsorizat</text>
              <text x="170" y="476" fontSize="17" fill="#1a63bd">Creare website și landing page</text>
              <text x="170" y="496" fontSize="13" fill="#607790">Pagini pregătite pentru promovare</text>
            </g>
          </g>
        </g>

        {/* Platform logo cards. Exact original logo files live in public/brands. */}
        <g className="hs18-logo-logo1">
          <g filter="url(#hs18-shadow-soft)"><rect x="36" y="106" width="85" height="88" rx="24" fill="#fff" /></g>
          <image href="/brands/google-ads-official-color.svg" x="52" y="122" width="52" height="56" preserveAspectRatio="xMidYMid meet" />
        </g>
        <g className="hs18-logo-logo2">
          <g filter="url(#hs18-shadow-soft)"><rect x="36" y="216" width="85" height="88" rx="24" fill="#fff" /></g>
          <image href="/brands/meta-infinity-original.png" x="47" y="239" width="63" height="42" preserveAspectRatio="xMidYMid meet" />
        </g>
        <g className="hs18-logo-logo3">
          <g filter="url(#hs18-shadow-soft)"><rect x="36" y="327" width="85" height="88" rx="24" fill="#fff" /></g>
          <image href="/brands/tiktok-official-user.png" x="56" y="344" width="46" height="52" preserveAspectRatio="xMidYMid meet" />
        </g>

        {/* Smaller ad card, limited overlap — phone and text stay legible. */}
        <g className="hs18-card-ad-float">
          <g filter="url(#hs18-shadow)"><rect x="130" y="230" width="253" height="227" rx="24" fill="#fff" /></g>
          <rect x="148" y="247" width="65" height="24" rx="12" fill="#e3f9ed" stroke="#c5f0d6" strokeWidth=".75" />
          <text x="180.5" y="263.5" fontSize="12.5" textAnchor="middle" fill="#19834c" fontWeight="700">Anunț</text>
          <text x="149" y="290" fontSize="15" fill="#19864c" fontWeight="700">companie.ro</text>
          <text x="149" y="329" fontSize="19" fill="#1469d9" fontWeight="700">Produse sau servicii</text>
          <text x="149" y="354" fontSize="19" fill="#1469d9" fontWeight="700">pentru compania ta</text>
          <text x="149" y="388" fontSize="13.4" fill="#5e718d">Reclame create pentru a atrage</text>
          <text x="149" y="409" fontSize="13.4" fill="#5e718d">vizite pe site, apeluri și cereri</text>
          <text x="149" y="430" fontSize="13.4" fill="#5e718d">de ofertă.</text>
        </g>

        {/* Results card, with subtler bar animations and illustrative labels. */}
        <g className="hs18-card-results-float">
          <g filter="url(#hs18-shadow)"><rect x="432" y="171" width="258" height="234" rx="25" fill="#fff" /></g>
          <text x="453" y="212" fontSize="22" fontWeight="700" fill="#152b4d">Rezultate</text>
          <text x="453" y="238" fontSize="22" fontWeight="700" fill="#152b4d">orientative</text>
          <circle cx="654" cy="206" r="20" fill="#e5f9ee" />
          <path d="M647 212l13-13M652 199h8v8" fill="none" stroke="#169c64" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M452 255h216" stroke="#e4eaf5" />
          <text x="453" y="283" fontSize="13.5" fill="#6c809a">Contacte noi</text>
          <text x="453" y="319" fontSize="30" fontWeight="700" fill="#0b9b58">+125%</text>
          <g fill="url(#hs18-bars)" className="hs18-metric-bars">
            <rect className="hs18-bar hs18-bar-a" x="588" y="312" width="12" height="12" rx="4" />
            <rect className="hs18-bar hs18-bar-b" x="605" y="301" width="12" height="23" rx="4" />
            <rect className="hs18-bar hs18-bar-c" x="622" y="291" width="12" height="33" rx="4" />
            <rect className="hs18-bar hs18-bar-d" x="639" y="280" width="12" height="44" rx="4" />
          </g>
          <path d="M452 340h216" stroke="#e4eaf5" />
          <text x="453" y="366" fontSize="13.5" fill="#6c809a">Vizite pe site</text>
          <text x="453" y="397" fontSize="30" fontWeight="700" fill="#0b9b58">+87%</text>
          <g fill="url(#hs18-bars)" className="hs18-metric-bars">
            <rect className="hs18-bar hs18-bar-a" x="588" y="385" width="12" height="12" rx="4" />
            <rect className="hs18-bar hs18-bar-b" x="605" y="375" width="12" height="22" rx="4" />
            <rect className="hs18-bar hs18-bar-c" x="622" y="366" width="12" height="31" rx="4" />
            <rect className="hs18-bar hs18-bar-d" x="639" y="354" width="12" height="43" rx="4" />
          </g>
        </g>

        {/* Lower performance chart, no floating banner or four-step process. */}
        <g className="hs18-chart-float">
          <g filter="url(#hs18-shadow)"><rect x="150" y="514" width="452" height="174" rx="26" fill="#fff" /></g>
          <text x="175" y="552" fontSize="21" fill="#162e50" fontWeight="700">Performanță campanii</text>
          <rect x="472" y="529" width="101" height="31" rx="15.5" fill="#e5faef" />
          <text x="487" y="549" fontSize="17" fill="#0a9f5d" fontWeight="700">↑ +142%</text>
          <g stroke="#e3eaf4" strokeWidth="1">
            <path d="M202 581h362" /><path d="M202 611h362" /><path d="M202 642h362" />
          </g>
          <g fill="#7a8da5" fontSize="11.5">
            <text x="175" y="585">150</text><text x="181" y="615">100</text><text x="188" y="646">50</text>
          </g>
          <path className="hs19-chart-area" d="M204 643 C229 624 246 612 264 613 S291 631 313 619 S350 596 368 604 S405 609 427 596 S452 597 468 590 S495 577 512 582 S542 568 560 567 L560 643Z" fill="url(#hs18-graph-fill)" />
          <path className="hs18-chart-line" d="M204 643 C229 624 246 612 264 613 S291 631 313 619 S350 596 368 604 S405 609 427 596 S452 597 468 590 S495 577 512 582 S542 568 560 567" stroke="#2776e9" strokeWidth="3.4" fill="none" strokeLinecap="round" />
          <g fill="#2574e8" className="hs18-chart-points hs19-chart-points">
            <circle cx="264" cy="613" r="5.3" /><circle cx="313" cy="619" r="5.3" />
            <circle cx="368" cy="604" r="5.3" /><circle cx="427" cy="596" r="5.3" />
            <circle cx="468" cy="590" r="5.3" /><circle cx="512" cy="582" r="5.3" />
            <circle cx="560" cy="567" r="5.3" />
          </g>
          <g fill="#667b94" fontSize="12.5">
            <text x="210" y="667">Ian</text><text x="274" y="667">Feb</text><text x="340" y="667">Mar</text>
            <text x="406" y="667">Apr</text><text x="476" y="667">Mai</text><text x="538" y="667">Iun</text>
          </g>
        </g>

        {/* Original user-supplied partner badge assets, not recreated or wrapped in cards. */}
        <g className="hs18-partners">
          <image href="/badges/google-premier-partner-2026.svg" x="199" y="694" width="144" height="93" preserveAspectRatio="xMidYMid meet" />
          <path d="M356 706v68" stroke="#c3d4ef" strokeWidth="1.8" />
          <image href="/badges/meta-business-partner.svg" x="378" y="695" width="205" height="88" preserveAspectRatio="xMidYMid meet" />
        </g>
      </svg>
    </div>
  );
}
