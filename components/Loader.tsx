const Loader = () => {
    return (
        <div className="loader-container">
            <img src="images/loader.gif" alt="Loading..." className="loader" />
            <style jsx>{`
                .loader-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                }
                .loader {
                    width: 100px; /* Adjust size as needed */
                    height: auto; /* Maintain aspect ratio */
                }
            `}</style>
        </div>
    );
};

export default Loader;
