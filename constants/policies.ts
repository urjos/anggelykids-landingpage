import {
  CalendarCheck,
  CreditCard,
  MapPin,
  Clock,
  ShieldAlert,
} from "lucide-react";

export const POLICIES = [
  {
    icon: CalendarCheck,
    title: "Reserva y confirmación",
    accentColor:
      "bg-angely-purple-100 text-angely-purple-700 border-angely-purple-300",
    badge: "Indispensable",
    description:
      "Toda fecha se reserva formalmente mediante un adelanto. Este monto no es reembolsable, ya que asegura la exclusividad del elenco, ensayos y el bloqueo de agenda para tu celebración.",
  },
  {
    icon: CreditCard,
    title: "Pago del saldo y medios aceptados",
    accentColor:
      "bg-angely-pink-100 text-angely-pink-600 border-angely-pink-300",
    badge: "Antes de iniciar",
    description:
      "El saldo pendiente se cancela en su totalidad antes de que comience el show (no al final ni durante). Aceptamos Yape, Plin, transferencia, depósito, efectivo y POS con tarjeta (el POS debe solicitarse antes de contratar).",
  },
  {
    icon: MapPin,
    title: "Movilidad y zonas de cobertura",
    accentColor: "bg-angely-teal-100 text-teal-800 border-angely-teal-400",
    badge: "Cotización aparte",
    description:
      "Ningún paquete incluye movilidad; el traslado se cotiza por separado según la distancia, distrito y tamaño del show. Cubrimos Lima Metropolitana y provincias aledañas (Huaral, Huacho, Cañete, entre otras).",
  },
  {
    icon: Clock,
    title: "Puntualidad y horas adicionales",
    accentColor: "bg-angely-yellow-100 text-amber-900 border-angely-yellow-400",
    badge: "A coordinar",
    description:
      "Cada show tiene una duración fija pensada para cumplir con el programa temático. Si durante el evento deseas extender el show, las horas extra se consultan y cotizan según la disponibilidad del elenco.",
  },
  {
    icon: ShieldAlert,
    title: "Cancelaciones o reprogramaciones",
    accentColor: "bg-rose-100 text-rose-700 border-rose-300",
    badge: "Términos claros",
    description:
      "En caso de suspensión, postergación o cancelación del evento por parte del cliente, la productora no se responsabiliza por el cambio de fecha ni por el reintegro del dinero entregado como adelanto.",
  },
];
