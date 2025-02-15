import Image from "next/image";

interface WeatherIconProps {
  width?: number;
  height?: number;
  alt?: string;
  iconName: string;
}

export default function WeatherIcon({
  width,
  height,
  alt,
  iconName,
}: WeatherIconProps) {
  return (
    <Image
      width={width ? width : 100}
      height={height ? height : 100}
      alt={alt ? alt : "weather-icon"}
      src={`https://openweathermap.org/img/wn/${iconName}@4x.png`}
    />
  );
}
