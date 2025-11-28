import React, { useEffect, useState } from "react";

const Modal = ({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
  width = "max-w-md",
  height = "",
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  // 900ms = slower animation
  const CLOSE_DURATION = 900;

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimate(true))
      );
    } else if (isVisible) {
      setAnimate(false);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, CLOSE_DURATION);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  // OPEN state transform
  const openTransform = "translate(0, 0) scaleX(1) scaleY(1)";

  // CLOSE state — fold + move to TOP-RIGHT
  const closeTransform =
    "translate(140px, -140px) scaleX(0.9) scaleY(0)"; // right + up

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-xl shadow-lg p-6 relative w-[90%]
          ${width} ${height} ${className}
          transform-gpu
        `}
        style={{
          transition: `transform ${CLOSE_DURATION}ms ease, opacity ${CLOSE_DURATION}ms ease`,
          transformOrigin: "top right",
          opacity: animate ? 1 : 0,
          transform: animate ? openTransform : closeTransform,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">{title}</h2>

        {/* Body */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
