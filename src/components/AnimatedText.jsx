
export default function AnimatedText({children}) {
  return (
    <div className="mainWindowText">
      <svg viewBox="0 100 500 80">
        <path id="curve" d="M50,150 L450,150" />
        <text className="creepster-regular">
          <textPath href="#curve" startOffset="50%" text-anchor="middle">
            {children}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
