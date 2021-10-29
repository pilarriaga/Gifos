import './Button.css';

function Button({
    className,
    onClick,
    children,
    disabled = false
}) {
    return (
        <button
        type = 'button'
        className = {`btn ${className ? `${className}`: ''}`}
        onClick = {onClick}
        disabled = {disabled}
        >
        {children}
        </button>
    );
}

export default Button;