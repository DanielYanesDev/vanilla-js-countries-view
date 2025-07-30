export const renderPagination = ({
  container,
  totalPages,
  currentPage,
  onPageChange,
}) => {
  container.innerHTML = "";

  if (currentPage > 1) {
    const prevBtn = createButton(
      "Previous",
      "App-pagination-button--prev",
      () => onPageChange(currentPage - 1)
    );
    container.appendChild(prevBtn);
  }

  for (let i = 1; i <= totalPages; i++) {
    const btn = createButton(i, "", () => onPageChange(i));
    if (i === currentPage) btn.classList.add("is-active");
    container.appendChild(btn);
  }

  if (currentPage < totalPages) {
    const nextBtn = createButton("Next", "App-pagination-button--next", () =>
      onPageChange(currentPage + 1)
    );
    container.appendChild(nextBtn);
  }
};

const createButton = (text, extraClass, onClick) => {
  const btn = document.createElement("button");
  btn.className = `App-pagination-button ${extraClass}`;
  btn.textContent = text;
  btn.addEventListener("click", onClick);
  return btn;
};
