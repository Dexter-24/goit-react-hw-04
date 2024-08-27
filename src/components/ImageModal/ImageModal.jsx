import Modal from 'react-modal';
import css from './imageModal.module.css'

Modal.setAppElement('#root')

export default function ImageModal({ isOpen, onClose, image }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={css.modal}
            overlayClassName={css.overlay}
        >
            {image && (
                <div className={css.modalContent}>
                    <img src={image.urls.regular} alt={image.alt_description} className={css.igm} />
                    <p>{image.description || 'No description available'}</p>
                    <p>Author: {image.user.name}</p>
                    <p>Likes: {image.likes}</p>
                    <button type="button" onClick={onClose} className={css.closeBtn}>Close</button>
                </div>
            )}
        </Modal>
    );
}