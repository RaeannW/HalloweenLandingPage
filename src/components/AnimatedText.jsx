
export default function AnimatedText() {
  return (
    <div className="mainWindowText">
      <svg viewBox="0 100 500 80">
        <path id="curve" d="M50,150 L450,150" />
        <text className="creepster-regular">
          <textPath href="#curve" startOffset="50%" text-anchor="middle">
            Halloween Recipes
          </textPath>
        </text>
      </svg>
    </div>
  );
}
