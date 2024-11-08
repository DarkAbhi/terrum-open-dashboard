import Link from "next/link";
import { Separator } from "./ui/separator";

export default function SiteFooter() {
  return (
    <footer className="text-gray-300 py-10 px-5">
      <Separator className="mb-8" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        <div className="mb-5 lg:mb-0">
          <h2 className="text-xl font-bold text-black  dark:text-white mb-2">
            Social Media
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                data-umami-event="Open Discord"
                href="https://discord.gg/c4869U2JjK"
                className="text-gray-700 dark:text-gray-400 hover:text-black hover:dark:text-white"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                data-umami-event="Open Instagram"
                href="https://www.instagram.com/terrum.in/"
                className="text-gray-700 dark:text-gray-400 hover:text-black hover:dark:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                data-umami-event="Open LinkedIn"
                href="https://www.linkedin.com/company/terrum-india/"
                className="text-gray-700 dark:text-gray-400 hover:text-black hover:dark:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/terrum_in"
                data-umami-event="Open X"
                className="text-gray-700 dark:text-gray-400 hover:text-black hover:dark:text-white"
              >
                X
              </a>
            </li>
          </ul>
        </div>

        {/* New Section for App Links */}
        <div className="mb-5 lg:mb-0 lg:col-span-1 lg:ml-auto flex flex-col items-start">
          <h2 className="text-xl font-bold text-black dark:text-white mb-2">
            Get the App
          </h2>
          <a
            href="https://play.google.com/store/apps/details?id=com.iku&hl=en_IN"
            target="_blank"
            data-umami-event="Go To Playstore"
            data-umami-event-position="Footer"
            rel="noopener noreferrer"
            className="mb-2"
          >
            <img
              src="/btn-g-play.svg"
              alt="Get it on Google Play"
              className="w-36"
            />
          </a>
          <img
            src="/btn-appstore-coming-soon.svg"
            alt="Download on the App Store"
            className="w-36 mb-4"
          />
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-4 pt-5">
        <Separator className="mb-5" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-5 md:mb-0 text-sm text-center text-black dark:text-gray-400">
            <span>&copy; 2024 Terrum. All rights reserved</span> |{" "}
            <Link
              href="/privacy/policy"
              data-umami-event="Open Privacy Policy"
              className="dark:hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex space-x-5 text-black dark:text-gray-400">
            Language: English (US)
          </div>
        </div>
      </div>
    </footer>
  );
}
