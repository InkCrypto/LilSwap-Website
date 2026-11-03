const Wordmark = ({ className = "h-6" }) => (
    <>
        <img src="/logo-wordmark-dark.svg" alt="LilSwap" draggable={false} className={`w-auto dark:hidden ${className}`} />
        <img src="/logo-wordmark-white.svg" alt="" aria-hidden="true" draggable={false} className={`hidden w-auto dark:block ${className}`} />
    </>
);

export default Wordmark;
