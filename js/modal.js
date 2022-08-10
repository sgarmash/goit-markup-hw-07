document.addEventListener("DOMContentLoaded", () => {

    const itemsModal = {
        openModalBtn: document.querySelectorAll("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    itemsModal.openModalBtn.forEach(btn => {
        btn.addEventListener("click", openModal);
    });

    function hideModal(evt) {
        if(evt.target === itemsModal.modal || evt.target.closest("[data-modal-close]")) {
            itemsModal.modal.classList.add("is-hidden");
        }
    }

    function openModal() {
        itemsModal.modal.classList.remove("is-hidden");
    }

    itemsModal.modal.addEventListener('click', hideModal);

});