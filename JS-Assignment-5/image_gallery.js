document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('image-gallery');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalContent = document.querySelector('.modal-content');

    function openModal(imageSrc) {
        modalImage.src = imageSrc;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    // Event Delegation on the gallery grid
    gallery.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'IMG' && target.closest('.gallery-item')) {
            openModal(target.src);
        }
    });

    // 1. Clicking outside the modal closes it
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // 2. Use event.stopPropagation() so clicking inside modal does not close it
    modalContent.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Optionally close with ESC key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});