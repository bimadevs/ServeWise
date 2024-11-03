import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function Features() {
  const features = [
      {
        title: "Dibangun untuk membantu usaha",
        description:
          "Mulai dari usaha kecil hingga menengah",
        icon: <IconTerminal2 />,
      },
      {
        title: "Kemudahan penggunaan",
        description:
          "Sesederhana menggunakan Apple, dan sesulit membelinya.",
        icon: <IconEaseInOut />,
      },
      {
        title: "Harga kami terbaik",
        description:
          "Harga kami terbaik di pasaran Indonesia saat ini",
        icon: <IconCurrencyDollar />,
      },
      {
        title: "Jaminan Waktu Aktif 100%",
        description: "Kami tidak bisa dihentikan oleh siapapun.",
        icon: <IconCloud />,
      },
      {
        title: "Arsitektur Multi-penyewa",
        description: "Anda dapat membagikan Chatbot daripada membeli baru",
        icon: <IconRouteAltLeft />,
      },
      {
        title: "Dukungan Pelanggan 24/7",
        description:
          "Kami tersedia 24/7. Setidaknya agen AI kami ada.",
        icon: <IconHelp />,
      },
      {
        title: "Garansi Uang Kembali",
        description:
          "Jika Anda tidak menyukai ServeWise, kami akan meyakinkan Anda untuk menyukai kami.",
        icon: <IconAdjustmentsBolt />,
      },
      {
        title: "Dibuat dengan sepenuh hati",
        description: "mengembangkan usaha anda dengna sepenuh hati",
        icon: <IconHeart />,
      },
    ];
  return (
    <div className="flex justify-center items-center flex-col">
      <span className="bg-clip-text text-transparent bg-gradient-to-t from-gray-500 via-white to-black inline-block">
        <h1 className="text-2xl md:text-4xl">Our Features</h1>
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >

      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
