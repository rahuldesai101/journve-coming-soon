import Image from "next/image"
import Link from "next/link"
import Button from "@/components/ui/button"
import { Plane, Cloud, X, Youtube } from "lucide-react"

// SEO Metadata for the page [^1][^2]
export const metadata = {
  title: "Journve - Your Smartest Travel Companion Awaits",
  description:
    "Journve: No chaos. No clutter. Just travel, made simple. The smartest travel companion app is coming soon!",
  keywords: [
    "Journve",
    "travel companion",
    "smart travel",
    "travel app",
    "coming soon",
    "travel planning",
    "trip organizer",
    "simple travel",
    "no chaos travel",
    "no clutter travel",
    "travel made simple",
    "new travel app",
    "future travel",
    "travel technology",
    "travel assistant",
    "journey planner",
    "vacation planner",
    "travel guide",
    "travel management",
    "digital nomad",
    "adventure travel",
    "explore",
    "destination",
    "travel tips",
    "trip planning",
    "travel itinerary",
    "travel app",
    "travel companion",
    "travel management",
    "travel expense tracker",
    "trip budget",
    "expense splitting",
    "travel budget planner",
    "group expense sharing",
    "travel cost calculator",
    "travel journal",
    "trip diary",
    "travel memories",
    "vacation journal",
    "travel blog",
    "trip documentation",
    "solo travel",
    "group travel",
    "travel planning tools",
    "smart travel",
    "travel technology",
  ],
  openGraph: {
    title: "Journve - Your Smartest Travel Companion Awaits",
    description:
      "Journve: No chaos. No clutter. Just travel, made simple. The smartest travel companion app is coming soon!",
    url: "https://journve-v1.vercel.app/", // Replace with your actual domain when deployed
    siteName: "Journve",
    images: [
      {
        url: "/journve-logo.png", // Use your existing logo for social media previews
        width: 800,
        height: 600,
        alt: "Journve Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journve - Your Smartest Travel Companion Awaits",
    description:
      "Journve: No chaos. No clutter. Just travel, made simple. The smartest travel companion app is coming soon!",
    images: ["/journve-logo.png"],
  },
  icons: {
    icon: "/icon.png", // Favicon for the browser tab
    apple: "/icon.png", // Apple touch icon
  },
}

export default function ComingSoonPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 to-gray-900 text-gray-50">
      {/* Fixed Header with Logo and Socials */}
      <header className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between items-center">
        {/* Empty div for spacing on the left to help center the logo */}
        <div className="w-20 h-20"></div>
        <Image
          src="/journve-logo.png"
          alt="Journve Logo"
          width={80} // Base size for mobile
          height={80} // Base size for mobile
          className="mx-auto md:w-20 md:h-20 lg:w-24 lg:h-24" // Responsive sizes
        />
        <div className="flex items-center gap-4">
          <Link
            href="https://x.com/journve"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <X size={24} />
            <span className="sr-only">Journve on X</span>
          </Link>
          <Link
            href="https://www.youtube.com/@Journve"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <Youtube size={24} />
            <span className="sr-only">Journve on YouTube</span>
          </Link>
        </div>
      </header>

      {/* Background moving elements */}
      <div className="absolute inset-0 z-0">
        {/* Planes */}
        <Plane
          className="absolute text-gray-700 opacity-20 animate-move-plane blur-sm"
          style={{
            top: "10%",
            left: "-10%",
            animationDuration: "30s",
            animationDelay: "0s",
            transform: "rotate(5deg)",
          }}
          size={64}
        />
        <Plane
          className="absolute text-gray-700 opacity-25 animate-move-plane"
          style={{
            top: "70%",
            left: "-20%",
            animationDuration: "45s",
            animationDelay: "15s",
            transform: "rotate(-10deg)",
          }}
          size={48}
        />
        <Plane
          className="absolute text-gray-700 opacity-22 animate-move-plane blur-md"
          style={{
            top: "40%",
            left: "-5%",
            animationDuration: "38s",
            animationDelay: "8s",
            transform: "rotate(15deg)",
          }}
          size={56}
        />
        <Plane
          className="absolute text-gray-700 opacity-28 animate-move-plane"
          style={{
            top: "25%",
            left: "-15%",
            animationDuration: "50s",
            animationDelay: "25s",
            transform: "rotate(-5deg)",
          }}
          size={72}
        />
        <Plane
          className="absolute text-gray-700 opacity-18 animate-move-plane blur-sm"
          style={{
            top: "85%",
            left: "-30%",
            animationDuration: "32s",
            animationDelay: "3s",
            transform: "rotate(20deg)",
          }}
          size={40}
        />
        <Plane
          className="absolute text-gray-700 opacity-26 animate-move-plane"
          style={{
            top: "55%",
            left: "-25%",
            animationDuration: "40s",
            animationDelay: "20s",
            transform: "rotate(-15deg)",
          }}
          size={60}
        />
        <Plane
          className="absolute text-gray-700 opacity-20 animate-move-plane blur-sm"
          style={{
            top: "30%",
            left: "-40%",
            animationDuration: "35s",
            animationDelay: "10s",
            transform: "rotate(8deg)",
          }}
          size={50}
        />
        <Plane
          className="absolute text-gray-700 opacity-24 animate-move-plane"
          style={{
            top: "65%",
            left: "-5%",
            animationDuration: "42s",
            animationDelay: "22s",
            transform: "rotate(-20deg)",
          }}
          size={70}
        />

        {/* Clouds */}
        <Cloud
          className="absolute text-gray-700 opacity-25 animate-move-cloud-1 blur-sm"
          style={{ top: "20%", left: "-30%", animationDuration: "40s", animationDelay: "5s" }}
          size={96}
        />
        <Cloud
          className="absolute text-gray-700 opacity-22 animate-move-cloud-2"
          style={{ top: "50%", right: "-30%", animationDuration: "50s", animationDelay: "0s" }}
          size={128}
        />
        <Cloud
          className="absolute text-gray-700 opacity-20 animate-move-cloud-1 blur-md"
          style={{ top: "80%", left: "-10%", animationDuration: "35s", animationDelay: "10s" }}
          size={80}
        />
        <Cloud
          className="absolute text-gray-700 opacity-24 animate-move-cloud-2"
          style={{ top: "35%", right: "-20%", animationDuration: "42s", animationDelay: "20s" }}
          size={110}
        />
        <Cloud
          className="absolute text-gray-700 opacity-19 animate-move-cloud-1 blur-sm"
          style={{ top: "60%", left: "-40%", animationDuration: "48s", animationDelay: "12s" }}
          size={100}
        />
        <Cloud
          className="absolute text-gray-700 opacity-28 animate-move-cloud-2"
          style={{ top: "15%", right: "-15%", animationDuration: "37s", animationDelay: "2s" }}
          size={105}
        />
        <Cloud
          className="absolute text-gray-700 opacity-18 animate-move-cloud-1 blur-md"
          style={{ top: "95%", left: "-25%", animationDuration: "55s", animationDelay: "25s" }}
          size={70}
        />
        <Cloud
          className="absolute text-gray-700 opacity-21 animate-move-cloud-2"
          style={{ top: "25%", right: "-40%", animationDuration: "45s", animationDelay: "18s" }}
          size={90}
        />
        <Cloud
          className="absolute text-gray-700 opacity-23 animate-move-cloud-1"
          style={{ top: "75%", left: "-50%", animationDuration: "39s", animationDelay: "7s" }}
          size={115}
        />

        {/* Stars/Dots - abstract elements for a sense of journey/night sky */}
        <div
          className="absolute w-2 h-2 bg-gray-700 rounded-full opacity-30 animate-move-star"
          style={{ top: "90%", left: "10%", animationDuration: "25s", animationDelay: "2s" }}
        />
        <div
          className="absolute w-3 h-3 bg-gray-700 rounded-full opacity-30 animate-move-star"
          style={{ top: "5%", left: "80%", animationDuration: "30s", animationDelay: "7s" }}
        />
        <div
          className="absolute w-1 h-1 bg-gray-700 rounded-full opacity-30 animate-move-star"
          style={{ top: "40%", left: "30%", animationDuration: "22s", animationDelay: "12s" }}
        />
        <div
          className="absolute w-2 h-2 bg-gray-700 rounded-full opacity-30 animate-move-star"
          style={{ top: "70%", left: "60%", animationDuration: "28s", animationDelay: "5s" }}
        />
        <div
          className="absolute w-1 h-1 bg-gray-700 rounded-full opacity-30 animate-move-star"
          style={{ top: "15%", left: "45%", animationDuration: "33s", animationDelay: "10s" }}
        />
        <div
          className="absolute w-2 h-2 bg-gray-700 rounded-full opacity-30 animate-move-star"
          style={{ top: "80%", left: "20%", animationDuration: "27s", animationDelay: "15s" }}
        />
        <div
          className="absolute w-3 h-3 bg-gray-700 rounded-full opacity-30 animate-move-star"
          style={{ top: "25%", left: "70%", animationDuration: "31s", animationDelay: "1s" }}
        />
        <div
          className="absolute w-1 h-1 bg-gray-700 rounded-full opacity-30 animate-move-star"
          style={{ top: "55%", left: "5%", animationDuration: "24s", animationDelay: "9s" }}
        />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 py-12 text-center md:px-6 lg:py-24">
        <div className="space-y-6">
          <p className="max-w-[700px] text-gray-300 text-3xl md:text-5xl lg:text-6xl font-semibold mt-16">
            Your Smartest TravelCompanion Awaits.
          </p>
          <p className="max-w-[700px] text-gray-400 text-lg md:text-xl lg:text-2xl">
            No chaos. No clutter. Just travel, made simple.
          </p>
          <p className="max-w-[700px] text-gray-500 text-base md:text-lg lg:text-xl mt-4">
            Journve will be officially launched soon.
          </p>
          <Link href="https://journve-v1.vercel.app/" passHref legacyBehavior>
            <Button className="mt-8 px-8 py-3 text-lg font-bold bg-primary hover:bg-primary/90 text-white rounded-full shadow-xl border-2 border-primary-foreground transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl md:px-10 md:py-4 md:text-xl">
              Try out our version 1
            </Button>
          </Link>

          {/* YouTube Video Embed */}
          <div className="mt-12 w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/i992fiWPCXI"
              title="Introducing Journve - Your Smartest Travel Companion Awaits"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  )
}