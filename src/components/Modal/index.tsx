import { useEffect, useId, useRef, type ReactNode } from "react";
import { FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const { t } = useTranslation();

  useEffect(() => {
    const dialog = ref.current;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, []);

  return (
    <dialog ref={ref} className="modal" aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="modal-surface">
        <div className="modal-top"><h2 id={titleId}>{title}</h2>
          <button type="button" className="icon-button" onClick={onClose} aria-label={t("design.close")}><FiX /></button>
        </div>
        {children}
      </div>
    </dialog>
  );
}
