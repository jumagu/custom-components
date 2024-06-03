import "./Label.css";

export interface LabelProps {
  /**
   * Text to display
   */
  name: string;
  /**
   * Font size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalizes first letter of each word
   */
  capitalize?: boolean;
  /**
   * What font color to use
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * What custom font color to use
   */
  customColor?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
}

export const Label = ({
  name,
  size = "normal",
  capitalize = false,
  color,
  customColor,
  backgroundColor = "transparent",
}: LabelProps) => {
  return (
    <span
      className={`label ${size} ${color}`}
      style={{
        color: customColor,
        textTransform: capitalize ? "capitalize" : "unset",
        backgroundColor,
      }}
    >
      {name}
    </span>
  );
};
