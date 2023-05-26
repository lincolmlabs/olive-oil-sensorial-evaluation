const dismissModal = (
  modalRef: React.RefObject<HTMLDivElement>,
  shadowRef: React.RefObject<HTMLDivElement>
) => {
  if (modalRef.current && shadowRef.current) {
    modalRef.current.classList.toggle("show");
    shadowRef.current.classList.toggle("show");
    (document.querySelector("body") as HTMLBodyElement).style.overflowY =
      "visible";
  }
};

export { dismissModal };
