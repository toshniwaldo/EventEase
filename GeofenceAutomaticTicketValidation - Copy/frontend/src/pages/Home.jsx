"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Play } from "lucide-react"

export default function Home() {
  const navigate = useNavigate()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlayingVideo, setIsPlayingVideo] = useState(false) // New state to control video playback

  // Simulate image rotation for background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      title: "EventEase",
      description: "Book in seconds, enter without waiting",
      gradient: "from-purple-400 to-pink-400",
      icon: "📍",
    },
    {
      title: "Secure Access",
      description: "Enhanced security with location-based verification and fraud prevention",
      gradient: "from-indigo-400 to-purple-400",
      icon: "🛡️",
    },
    {
      title: "Easy Booking",
      description: "Simple and quick ticket booking process for all types of events",
      gradient: "from-pink-400 to-red-400",
      icon: "🎫",
    },
  ]

  const stats = [
    { number: "50K+", label: "Events Hosted" },
    { number: "2M+", label: "Tickets Sold" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.9★", label: "User Rating" },
  ]

  const eventTypes = [
    { type: "Concerts", emoji: "🎵", color: "from-pink-500 to-rose-500", desc: "Live music events" },
    { type: "Sports", emoji: "⚽", color: "from-green-500 to-emerald-500", desc: "Stadium experiences" },
    { type: "Festivals", emoji: "🎪", color: "from-yellow-500 to-orange-500", desc: "Cultural celebrations" },
    { type: "Theater", emoji: "🎭", color: "from-indigo-500 to-purple-500", desc: "Stage performances" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* HERE IS WHERE THE BACKGROUND IMAGE IS EMBEDDED */}
      <div className="absolute inset-0">
        <img
          src="/outdoor-music-festival.jpg"
          alt="Outdoor Music Festival Background"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/85 to-pink-800/90"></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1200"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-12 mb-8 transform transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl"></div>

              <div className="relative z-10">
                {/* Logo/Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-6 transform transition-transform duration-500 hover:rotate-12 shadow-lg">
                  <span className="text-3xl">🎫</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 bg-clip-text text-transparent leading-tight">
                  EventEase
                </h1>

                <p className="text-xl md:text-2xl text-purple-200/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Book in seconds, enter without waiting
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                  <button
                    onClick={() => navigate("/login")}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400/50 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-y-full transition-transform group-hover:translate-y-0"></div>
                    <div className="relative flex items-center justify-center">
                      Login
                      <svg
                        className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </button>

                  <button
                    onClick={() => navigate("/signup")}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                  >
                    Sign Up
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group cursor-pointer">
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-purple-200/60 text-sm group-hover:text-purple-200/80 transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Event Types Showcase - Moved above Demo Section */}
          <div className="mt-16 mb-16">
            {" "}
            {/* Added mt-16 and mb-16 for spacing */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Book Any Event Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventTypes.map((event, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 group cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}
                    
                  >
                    <span className="text-xl">{event.emoji}</span>
                  </div>
                  <h4 className="text-white font-semibold group-hover:text-purple-200 transition-colors mb-1">
                    {event.type}
                  </h4>
                  <p className="text-purple-200/60 text-sm mt-1">Book now</p>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 transform transition-all duration-500 hover:scale-105 mt-16 mb-16">
            {" "}
            {/* Added mt-16 and mb-16 for spacing */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                See It In Action
              </h2>
              <p className="text-purple-200/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Watch how our geofence technology seamlessly validates tickets as attendees enter event venues
              </p>

              <div className="relative max-w-4xl mx-auto aspect-video">
                {" "}
                {/* Increased max-w to max-w-4xl */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-0 border border-white/10 group cursor-pointer w-full h-full flex items-center justify-center overflow-hidden">
                  {!isPlayingVideo ? (
                    // Thumbnail and Play Button
                    <div
                      className="relative w-full h-full flex flex-col items-center justify-center"
                      onClick={() => setIsPlayingVideo(true)} // Start playing video on click
                    >
                      <img
                        src="/outdoor-music-festival.png" // Placeholder for video thumbnail
                        alt="Video Thumbnail"
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-70"
                      />
                      <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-center justify-center">
                        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform transition-transform duration-300 group-hover:scale-110 shadow-lg">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                        <p className="absolute bottom-4 text-purple-200/60 group-hover:text-purple-200/80 transition-colors">
                          Click to watch demo
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Video Player
                    <video
                      src="/Demo.mp4"
                      controls
                      autoPlay
                      className="w-full h-full rounded-lg"
                      onEnded={() => setIsPlayingVideo(false)} // Reset to thumbnail when video ends
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Features Section - Moved below Demo Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-16">
            {" "}
            {/* Added mt-16 for spacing */}
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 transform transition-all duration-500 hover:scale-105 hover:bg-white/15 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl"></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full mb-6 transform transition-transform duration-500 group-hover:rotate-12 shadow-lg`}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-purple-200/80 leading-relaxed group-hover:text-purple-200/90 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Action Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-300"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse delay-700"></div>
        </div>
      </div>
    </div>
  )
}
