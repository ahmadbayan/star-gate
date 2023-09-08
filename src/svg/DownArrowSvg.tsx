export default function DownArrowSvg({ classes, fill }: any) {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48.5 26.8"
    >
      <defs>
        <clipPath id="clippath">
          <rect className="cls-1 fill-none" width="48.5" height="26.8" />
        </clipPath>
      </defs>
      <g id="Layer_1-2" data-name="Layer 1">
        <g className="fill-none" style={{ clipPath: "url(#clippath)" }}>
          <polyline
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5px"
            fill="none"
            className={fill}
            points="2.5 2.5 24.25 24.3 46 2.91"
          />
        </g>
      </g>
    </svg>
  );
}
