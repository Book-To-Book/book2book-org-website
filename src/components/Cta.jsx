const Cta = ({
  link,
  alt,
  onClick,
  size,
  children
}) => {
  const padding = size === "sm" ? "px-3 py-1" : "px-10 py-3";

  if (link) return (
    <a href={link} alt={alt} className={`rounded-full border-2 w-fit cursor-pointer hover:opacity-80 ${padding}`}>
      {children}
    </a>
  )

  if (onClick) return (
    <button className={`rounded-full border-2 w-fit cursor-pointer hover:opacity-80 ${padding}`} onClick={onClick}>
      {children}
    </button>
  )

  return (
    <button className={`rounded-full border-2 w-fit cursor-pointer hover:opacity-80 ${padding}`} type="submit">
      {children}
    </button>
  )
}
export default Cta;