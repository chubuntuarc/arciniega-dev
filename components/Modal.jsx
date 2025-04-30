import React from 'react';
import { FaGithub } from 'react-icons/fa';

// Define styles directly within the component or import from a separate CSS/style file
const styles = {
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: '30px 40px',
        borderRadius: '10px',
        maxWidth: '650px',
        width: '90%',
        maxHeight: '85vh',
        overflowY: 'auto',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
        position: 'relative',
        color: '#000',
    },
    modalList: {
      color: '#000',
    },
    modalTitle: {
        marginTop: 0,
        marginBottom: '15px',
        color: '#000',
        paddingBottom: '0px',
        fontSize: '1.6rem',
        fontWeight: 500,
    },
    modalRepoLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#007bff',
        textDecoration: 'none',
        marginBottom: '10px',
        wordBreak: 'break-all',
        fontSize: '0.8rem',
    },
    modalRepoLinkIcon: {
        fontSize: '1.2rem',
        color: '#000',
    },
    modalYear: {
        fontSize: '1.2rem',
        color: '#000',
        marginBottom: '20px',
    },
    modalCloseButton: {
        position: 'absolute',
        top: '15px',
        right: '20px',
        background: 'transparent',
        border: 'none',
        fontSize: '1.8rem',
        lineHeight: '1',
        color: '#000',
        cursor: 'pointer',
        padding: '0',
    },
    // Style for the close button on hover (optional, better with CSS classes)
    // modalCloseButtonHover: {
    //     backgroundColor: '#5a6268',
    // }
};

const Modal = ({ isOpen, onClose, title, content, year, repo_url }) => {
    if (!isOpen) {
        return null; // Don't render anything if the modal is not open
    }

    // Function to handle clicks on the overlay (closes the modal)
    const handleOverlayClick = (e) => {
        // Close only if the click is directly on the overlay, not on the content
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div style={styles.modalOverlay} onClick={handleOverlayClick}>
            <div style={styles.modalContent}>
                <button onClick={onClose} style={styles.modalCloseButton} aria-label="Cerrar">
                    &times;
                </button>

                {title && <h3 style={styles.modalTitle}>{title}</h3>}
                {repo_url && (
                    <a href={repo_url} target="_blank" rel="noopener noreferrer" style={styles.modalRepoLink}>
                        <FaGithub style={styles.modalRepoLinkIcon} />
                        <span>View on GitHub</span>
                    </a>
                )}
                {year && <h4 style={styles.modalYear}>{year}</h4>}
                {/* Render the content passed as children */}
                {content}
            </div>
        </div>
    );
};

export default Modal; 