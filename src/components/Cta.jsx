const Cta = ({
  link,
  alt,
  onClick,
  size,
  children
}) => {
  const padding = size === "sm" ? "px-3 py-1" : "px-10 py-3";
  return (
    <>
      {link && <a href={link} alt={alt} className={`rounded-full border-2 w-fit ${padding}`}>
        {children}
      </a>}
      {onClick && <button className={`rounded-full border-2 w-fit ${padding}`} onClick={onClick}>
        {children}
      </button>}
    </>
  )
}
export default Cta;