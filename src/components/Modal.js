import { useEffect, useId } from "react";
import { createPortal } from "react-dom";

function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidthClassName = "max-w-2xl",
}) {
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`w-full ${maxWidthClassName} overflow-hidden rounded-3xl border border-[#F56B1E]/45 bg-gradient-to-br from-[#1f2022] via-[#18191b] to-[#131416] text-white shadow-[0_24px_80px_rgba(0,0,0,0.6)]`}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex items-start justify-between border-b border-white/10 px-6 py-5 sm:px-8">
          <h3 id={titleId} className="pr-6 text-2xl font-bold text-white">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xl text-white transition hover:border-[#F56B1E]/60 hover:text-[#F56B1E]"
            aria-label="Fermer la fenêtre"
          >
            ×
          </button>
        </header>
        <div className="px-6 py-6 sm:px-8 sm:py-7">{children}</div>
      </section>
    </div>,
    document.body
  );
}

export default Modal;
