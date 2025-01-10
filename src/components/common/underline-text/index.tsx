import { encodedUnderlineSvg } from "../svg";

interface UnderlineTextProps {
    children: React.ReactNode;
    className?: string;
    isActive?: boolean;
}

const UnderlineText = ({
    children,
    isActive = true,
    className = "",
}: UnderlineTextProps) => {
    return (
        <span
            className={`relative inline-block ${className}`}
            style={
                {
                    "--underline-svg": `url("data:image/svg+xml,${encodedUnderlineSvg}")`,
                } as React.CSSProperties
            }
        >
            {children}
            {isActive && (
                <span
                    className="absolute bottom-[-8px] left-0 w-full h-[8px] bg-no-repeat bg-left bg-[length:100%]"
                    style={{ backgroundImage: "var(--underline-svg)" }}
                ></span>
            )}
        </span>
    );
};

export default UnderlineText;
