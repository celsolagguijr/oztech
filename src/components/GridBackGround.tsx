function GridBackGround() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full fill-gray-400/20 stroke-gray-400/10"
    >
      <defs>
        <pattern
          id=":S1:"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x="-1"
          y="-1"
        >
          <path d="M.5 40V.5H40" fill="none" strokeDasharray="0" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#:S1:)" />
      <svg x="-1" y="-1" className="overflow-visible">
        <rect strokeWidth="0" width="39" height="39" x="241" y="241" />
        <rect strokeWidth="0" width="39" height="39" x="521" y="121" />
        <rect strokeWidth="0" width="39" height="39" x="1281" y="121" />
        <rect strokeWidth="0" width="39" height="39" x="1481" y="281" />
        <rect strokeWidth="0" width="39" height="39" x="1561" y="241" />
        <rect strokeWidth="0" width="39" height="39" x="1641" y="601" />
        <rect strokeWidth="0" width="39" height="39" x="161" y="681" />
        <rect strokeWidth="0" width="39" height="39" x="281" y="561" />
        <rect strokeWidth="0" width="39" height="39" x="121" y="201" />
        <rect strokeWidth="0" width="39" height="39" x="401" y="401" />
        <rect strokeWidth="0" width="39" height="39" x="1001" y="161" />
        <rect strokeWidth="0" width="39" height="39" x="1001" y="361" />
      </svg>
    </svg>
  );
}

export default GridBackGround;
