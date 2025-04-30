import React, { useState, useCallback, useRef, useMemo } from 'react';
import HTMLFlipBook from 'react-pageflip'; // Importar el componente
import Modal from '../../../components/Modal'; // Import the new Modal component

const TOTAL_PAGES = 10; // Mantienes el total de páginas

// Componente para una página individual (simplificado)
// Necesita recibir el número de página para cargar la imagen correcta
// Wrap with React.memo for performance optimization
const Page = React.memo(React.forwardRef(({ pageNumber }, ref) => {
    const getImagePath = (number) => `/mm_pages/${number}.jpg`;

    return (
        <div className="page" ref={ref} style={styles.page}>
            <img
                src={getImagePath(pageNumber)}
                alt={`Catalog Page ${pageNumber}`}
                style={styles.catalogImage}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.alt = `Image ${pageNumber} not found`;
                    console.error(`Failed to load image: ${e.target.src}`);
                    // Podrías mostrar un placeholder aquí si la imagen falla
                }}
            />
        </div>
    );
}));
Page.displayName = 'Page'; // Añadir displayName para debugging

export default function DigitalCatalog() {
    const [currentPage, setCurrentPage] = useState(0); // react-pageflip usa índice 0
    const flipBookRef = useRef(null); // Referencia para controlar el libro
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

    // Función para ir a la página siguiente (llamada por botón o evento)
    // Memoize the handler using useCallback
    const handleNext = useCallback(() => {
        if (flipBookRef.current) {
            flipBookRef.current.pageFlip().flipNext();
        }
    }, []); // No dependencies needed

    // Función para ir a la página anterior (llamada por botón o evento)
    // Memoize the handler using useCallback
    const handlePrevious = useCallback(() => {
        if (flipBookRef.current) {
            flipBookRef.current.pageFlip().flipPrev();
        }
    }, []); // No dependencies needed

    // Callback cuando la página cambia en el libro
    const onPage = useCallback((e) => {
        setCurrentPage(e.data); // Actualiza el estado con el nuevo número de página (índice 0)
    }, []);

    // Generar las páginas para el libro usando useMemo for performance
    // This ensures the pages array is only created once, as TOTAL_PAGES is constant.
    const pages = useMemo(() => {
        const pageElements = [];
        for (let i = 1; i <= TOTAL_PAGES; i++) {
            // El número de página que pasamos al componente Page sigue siendo 1-based
            pageElements.push(<Page key={i} pageNumber={i} />);
        }
        return pageElements;
    }, []); // Empty dependency array means it only runs once

    // Nota: react-pageflip necesita saber el ancho y alto fijos.
    // Ajusta estos valores según el tamaño deseado para tu catálogo.
    const bookWidth = 800; // Ancho total del libro abierto (dos páginas)
    const bookHeight = 500; // Alto del libro

    return (
        <div style={styles.catalogContainer}>
            <h2 style={styles.title}>Digital Catalog</h2>

            {/* Botón para abrir el modal de detalles */}
            <button onClick={() => setIsModalOpen(true)} style={styles.detailsButton}>
                Project Details
            </button>

            {/* Contenedor para el efecto page-flip */}
            <div style={styles.flipBookContainer}>
                <HTMLFlipBook
                    width={bookWidth / 2} // Ancho de una página
                    height={bookHeight}
                    size="stretch" // Para ajustar al contenedor
                    minWidth={300} // Ancho mínimo de una página
                    maxWidth={bookWidth / 2} // Ancho máximo de una página
                    minHeight={400} // Alto mínimo
                    maxHeight={bookHeight} // Alto máximo
                    maxShadowOpacity={0.5}
                    showCover={false} // Puedes poner una portada si quieres (página 0)
                    mobileScrollSupport={true} // Habilita scroll en móviles
                    onFlip={onPage} // Llama a onPage cuando la página cambia
                    ref={flipBookRef} // Asigna la referencia
                    className="demo-book" // Clase opcional para estilos
                    style={{ margin: '0 auto' }} // Centrar el libro si es necesario
                >
                    {/* Renderiza todas las páginas generadas */}
                    {pages}

                </HTMLFlipBook>
            </div>

            {/* Controles de navegación (opcional, ya que puedes usar el mouse) */}
            <div style={styles.navigation}>
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 0} // Deshabilitado en la primera página (índice 0)
                    style={currentPage === 0
                        ? { ...styles.navButton, ...styles.navButtonDisabled }
                        : styles.navButton
                    }
                    className="nav-button-class"
                >
                    &lt; Anterior
                </button>

                <span style={styles.pageIndicator}>
                    {/* Mostramos página actual + 1 porque el estado es 0-based */}
                    Página {currentPage + 1} / {TOTAL_PAGES}
                </span>

                <button
                    onClick={handleNext}
                    // Deshabilitado en la última página (índice TOTAL_PAGES - 1)
                    disabled={currentPage >= TOTAL_PAGES - 1}
                    style={currentPage >= TOTAL_PAGES - 1
                        ? { ...styles.navButton, ...styles.navButtonDisabled }
                        : styles.navButton
                    }
                    className="nav-button-class"
                >
                    Siguiente &gt;
                </button>
            </div>

            {/* Use the reusable Modal component */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Project Details: Interactive Catalog"
                repo_url="https://github.com/chubuntuarc/catalogoMM"
                year="2015"
                content={
                    <>
                    <div>
                      <p>
                        * This was one of my first web development projects.
                      </p>
                      <p>
                        * The client was a women&apos;s handbag company.
                      </p>
                      <p>
                        * They needed a digital catalog to easily share with their clients.
                      </p>
                      <p>
                        * The main challenge was replicating the feel of a physical catalog flip.
                      </p>
                      <p>
                        * Originally built using jQuery and the turn.js library.
                      </p>
                    </div>
                    <br />
                    
                    
                        <div>
                          <hr style={{ border: '1px solid #000', width: '100%'}}/>
                          <br />
                            <h4>Update 2025</h4>
                            <p>
                              This project demonstrates the creation of an interactive digital catalog using React and the <code>react-pageflip</code> library. The goal was to simulate the experience of flipping through a physical catalog on a web environment.
                            </p>
                            <br />
                            <h4>Technologies Used:</h4>
                            <p>
                              <p>* React (with Hooks: useState, useRef, useCallback)</p>
                              <p>* react-pageflip: For the page-flipping effect.</p>
                              <p>* JavaScript (ES6+)</p>
                              <p>* CSS (Inline Styles): For design and layout.</p>
                              <p>* Next.js project structure (implicit by the `pages/` route)</p>
                            </p>
                            <br />
                            <h4>Main Features:</h4>
                            <p>
                              <p>* Realistic page-flipping effect.</p>
                              <p>* Navigation via buttons and mouse/touch drag.</p>
                              <p>* Dynamic image loading per page.</p>
                              <p>* Current page indicator.</p>
                              <p>* Error handling for missing images.</p>
                            </p>
                            <br />
                            <h4>Challenges and Learnings:</h4>
                            <p>
                              The integration and configuration of <code>react-pageflip</code> required understanding its API and how it handles dimensions and page states. Ensuring that images load correctly and handling error cases was important. Additionally, React state management was practiced to synchronize the user interface (buttons, page indicator) with the internal component state of the book.
                            </p>
                        </div>
                    </>
                }
            />
        </div>
    );
}

// Estilos actualizados/nuevos
const styles = {
    catalogContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px 20px', // Aumentar padding vertical
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        maxWidth: '1000px',
        margin: '40px auto', // Más margen superior/inferior
        backgroundColor: '#f8f9fa', // Fondo gris muy claro
        borderRadius: '8px', // Bordes redondeados para el contenedor
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', // Sombra suave al contenedor
    },
    title: {
        marginBottom: '15px', // Más espacio debajo del título
        color: '#343a40', // Color de texto más oscuro
        fontSize: '2rem', // Tamaño de fuente más grande
        fontWeight: '600', // Un poco más de peso
    },
    detailsButton: {
        marginBottom: '30px', // Más espacio antes del libro
        padding: '10px 20px', // Botón un poco más grande
        fontSize: '1rem',
        cursor: 'pointer',
        background: 'linear-gradient(90deg, #9333FF -5%, #FF6B6B 50%, #FFB86C 105%)',
        color: 'white',
        border: 'none',
        borderRadius: '5px', // Bordes redondeados
        transition: 'background-color 0.2s ease, transform 0.1s ease', // Transición suave
        // Nota: El efecto hover real se maneja mejor con CSS o styled-components.
        // Para inline, podrías añadir lógica onMouseEnter/onMouseLeave si es necesario.
        // O simplemente confiar en que el navegador aplique algún efecto básico.
        // Vamos a añadir un estilo base que se vea bien.
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Sombra sutil al botón
    },
    // Estilo para el botón details al hacer hover (requiere lógica JS o CSS externo)
    // detailsButtonHover: {
    //     backgroundColor: '#5a6268',
    //     transform: 'translateY(-1px)',
    // },
    flipBookContainer: {
        width: '90%',
        maxWidth: '800px',
        height: 'auto', // Mantenemos auto
        marginBottom: '30px', // Más espacio después del libro
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)', // Sombra más pronunciada para el libro
        borderRadius: '4px', // Redondear esquinas del contenedor del libro (opcional)
        overflow: 'hidden', // Asegura que la sombra no se corte si el libro tiene bordes
    },
    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Fondo blanco para las páginas
        // Quitar borde si el contenedor ya tiene sombra/borde
        // border: '1px solid #eee',
        overflow: 'hidden',
    },
    catalogImage: {
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        width: 'auto', // Mantiene la proporción
        height: 'auto', // Mantiene la proporción
        objectFit: 'contain', // Asegura que toda la imagen sea visible
    },
    navigation: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Mantiene la distribución
        width: '90%',
        maxWidth: '800px', // Coincide con el libro
        marginTop: '10px', // Reducir un poco el margen superior si flipBookContainer tiene más margen inferior
    },
    navButton: { // Estilo base para botones de navegación
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    // Estilos condicionales que aplicarías en el elemento <button>
    // Ejemplo: style={currentPage === 0 ? {...styles.navButton, ...styles.navButtonDisabled} : styles.navButton}
    navButtonDisabled: {
        backgroundColor: '#cccccc',
        cursor: 'not-allowed',
        boxShadow: 'none',
    },
    // Estilo para hover (requiere JS o CSS)
    // navButtonHover: {
    //     backgroundColor: '#0056b3',
    //     boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
    //     transform: 'translateY(-1px)',
    // },
    pageIndicator: {
        fontSize: '1.1rem', // Ligeramente más grande
        fontWeight: '500', // Peso medio
        color: '#495057', // Color gris oscuro
        margin: '0 15px',
        minWidth: '120px', // Un poco más de espacio
        textAlign: 'center',
    },
};

// Nota importante sobre Hover/Disabled con Inline Styles:
// Los pseudo-selectores como :hover y :disabled no funcionan directamente en objetos de estilo inline de React.
// Para implementar efectos hover o estilos para el estado disabled:
// 1. Usar CSS tradicional (global o módulos CSS).
// 2. Usar librerías CSS-in-JS como Styled Components o Emotion.
// 3. Manejar eventos onMouseEnter/onMouseLeave en los botones para cambiar un estado y aplicar estilos condicionales.
// 4. Para 'disabled', puedes aplicar estilos condicionalmente basados en la prop `disabled` del botón, como se sugiere en el comentario de `navButtonDisabled`.

// Ejemplo de cómo aplicar el estilo disabled condicionalmente en el botón:
/*
<button
    onClick={handlePrevious}
    disabled={currentPage === 0}
    style={currentPage === 0
        ? { ...styles.navButton, ...styles.navButtonDisabled } // Combina estilo base y disabled
        : styles.navButton // Solo estilo base
    }
    className="nav-button-class" // Puedes usar clases para hover/focus
>
    &lt; Anterior
</button>
*/
