export default function SealMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" stroke="#0F2C59" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="16" stroke="#2563EB" strokeWidth="1.5" />
      <path
        d="M24 14L26.4 20.6H33.4L27.8 24.6L29.9 31.4L24 27.2L18.1 31.4L20.2 24.6L14.6 20.6H21.6L24 14Z"
        fill="#0F2C59"
      />
    </svg>
  );
}