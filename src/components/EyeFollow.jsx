import girl from "../assets/girl.png"
import eye from "../assets/eye.png"
import { useEffect, useRef } from "react";

export default function EyeFollow() {
  const girlRef = useRef(null);
  const eyeLeftRef = useRef(null);
  const eyeRightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (!girlRef.current) return;

      const girlRect = girlRef.current.getBoundingClientRect();
      const girlX = girlRect.left + girlRect.width / 2;
      const girlY = girlRect.top + girlRect.height / 2;

      const angleDeg = angle(mouseX, mouseY, girlX, girlY);

      if (eyeRightRef.current)
        eyeRightRef.current.style.transform = `rotate(${190 + angleDeg}deg)`;
      if (eyeLeftRef.current)
        eyeLeftRef.current.style.transform = `rotate(${190 + angleDeg}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    return (rad * 180) / Math.PI;
  };

  return (
      <div className="character-wrapper">
        <div className="character">
          <img id="girl" ref={girlRef} src={girl} />
          <img id="eyeRight" ref={eyeLeftRef} className="eye" src={eye} />
          <img id="eyeLeft" ref={eyeRightRef} className="eye" src={eye} />
        </div>
      </div>
  );
}
