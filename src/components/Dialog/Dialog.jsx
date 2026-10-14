import { useEffect, useRef } from 'react';

// Native modal dialogs trap focus and make the background inert.
export function Dialog({
  id,
  className,
  labelledBy,
  onClose,
  open = true,
  children,
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const dialog = ref.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [open]);

  function handleBackdrop(event) {
    if (event.target !== ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      onClose();
  }

  function handleTab(event) {
    if (event.key !== 'Tab') return;
    const targets = Array.from(
      ref.current.querySelectorAll(
        'a[href], button:not([disabled]), summary, [tabindex="0"]',
      ),
    ).filter((element) => element.getClientRects().length > 0);
    const first = targets[0];
    const last = targets[targets.length - 1];
    if (!first) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <dialog
      id={id}
      ref={ref}
      className={className}
      aria-labelledby={labelledBy}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={handleBackdrop}
      onKeyDown={handleTab}
    >
      {children}
    </dialog>
  );
}
