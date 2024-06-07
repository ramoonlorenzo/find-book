import { useCallback } from "react";
import classNames from "classnames";

type Props = {
  title: string;
  className?: string;
};

export function Tag({ title, className }: Props) {
  const randomColors = useCallback(() => {
    const hue = Math.floor(Math.random() * 360);
    const lightness = `hsl(${hue}, 100%, 95%)`;
    const darkness = `hsl(${hue}, 100%, 20%)`;
    return { lightness, darkness };
  }, []);

  return (
    <p
      style={{
        backgroundColor: randomColors().lightness,
        color: randomColors().darkness,
      }}
      className={classNames([
        "rounded-full bg-opacity-50 text-center w-fit px-3 py-1",
        className,
      ])}
    >
      {title}
    </p>
  );
}
