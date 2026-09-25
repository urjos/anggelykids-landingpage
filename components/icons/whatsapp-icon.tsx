import Image from "next/image";
import { cn } from "@/lib/utils";
import { icons } from "@/constants/icons";

export interface WhatsAppIconProps {
  size?: number;
  className?: string;
  alt?: string;
  priority?: boolean;
}

export function WhatsAppIcon({
  size = 30,
  className,
  alt = "WhatsApp",
  priority = false,
}: WhatsAppIconProps) {
  return (
    <Image
      src={icons.whatsapp}
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={cn("object-contain brightness-0 invert shrink-0", className)}
    />
  );
}

export { WhatsAppIcon as WhatsApp };
export default WhatsAppIcon;
