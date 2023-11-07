export default function TabButton({isSelected, children, ...props}) {
  return (
    <li>
      <button
        {...props}
        className={isSelected ? 'active' : undefined}
      >
        {children}
      </button>
    </li>
  )
}