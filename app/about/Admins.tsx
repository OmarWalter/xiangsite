import {
  IconBrandTelegram
} from "@tabler/icons-react";

export default function Admins() {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h4 className="text-4xl font-bold text-green-400 mb-4 text-center">
          Our Admins
        </h4>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="text-center">
            <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-500" />
            <p className="text-lg font-semibold text-gray-300"> @ASIANELON0</p>
            <a
              href="https://t.me/asianelon0"
              className="text-green-400 hover:text-green-300 font-semibold text-4xl animate-shine"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>
          <div className="text-center">
            <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            <p className="text-lg font-semibold text-gray-300">@ASIANBEAST1</p>
            <a
              href="https://t.me/ASIANBEAST1"
              className="text-green-400 hover:text-green-300 font-semibold text-4xl animate-shine"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}