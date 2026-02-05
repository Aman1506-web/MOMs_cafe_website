import Link from "next/link";

const WHATSAPP_NUMBER = "919999999999"; // replace with actual number
const WHATSAPP_MESSAGE = "Hi! I'd like to place an order from MOMs Cafe.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50
        flex items-center justify-center
        h-12 w-12 sm:h-14 sm:w-14
        rounded-full
        bg-[#25D366] shadow-lg shadow-green-500/30
        hover:scale-110 hover:shadow-xl hover:shadow-green-500/40
        active:scale-95
        transition-all duration-200
      "
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 sm:h-7 sm:w-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.744 3.047 9.379L1.054 31.27l6.1-1.963A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.32 22.598c-.39 1.1-2.273 2.04-3.152 2.14-.879.103-1.69.395-5.691-1.185-4.826-1.904-7.832-6.836-8.07-7.152-.237-.316-1.937-2.577-1.937-4.916s1.227-3.484 1.662-3.96c.434-.477.95-.596 1.267-.596.316 0 .632.003.91.016.292.013.683-.11 1.069.816.39.94 1.326 3.238 1.443 3.472.118.237.197.514.04.83-.158.316-.237.514-.474.79-.237.277-.5.62-.712.83-.237.237-.484.494-.208.97.277.474 1.23 2.03 2.641 3.289 1.814 1.62 3.342 2.122 3.816 2.36.474.237.75.197 1.027-.12.277-.316 1.187-1.384 1.503-1.86.316-.475.632-.396 1.067-.237.434.158 2.757 1.3 3.23 1.538.474.237.79.355.908.553.118.197.118 1.147-.273 2.247Z" />
      </svg>
    </Link>
  );
}
