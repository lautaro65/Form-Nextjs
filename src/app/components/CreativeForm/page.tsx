"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Lock, Send } from 'lucide-react'

const ResponsiveCreativeForm: React.FC = () => {
  const [focused, setFocused] = useState<string | null>(null)

  return (
    <div className="flex items-center justify-center w-full h-full min-h-[300px] bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <motion.div
        className="relative w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ opacity: 0.1 }}
        />
        <form className="relative flex flex-col items-center justify-center h-full p-4 space-y-3">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Join Us</h2>
          <div className="w-full space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                className="pl-9 pr-3 py-2 w-full rounded-full bg-gray-100 focus:bg-white transition-colors duration-300 text-sm text-gray-700 "
                onFocus={() => setFocused('username')}
                onBlur={() => setFocused(null)}
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: focused === 'username' ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="pl-9 pr-3 py-2 w-full rounded-full bg-gray-100 focus:bg-white transition-colors duration-300 text-sm text-gray-700"
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: focused === 'email' ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="pl-9 pr-3 py-2 w-full rounded-full bg-gray-100 focus:bg-white transition-colors duration-300 text-sm text-gray-700"
                onFocus={() => setFocused('password')}
                onBlur={() => setFocused(null)}
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: focused === 'password' ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
          <button 
            type="submit"
            className="w-full py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-white font-medium text-sm flex items-center justify-center"
          >
            <Send className="mr-2" size={16} />
            Sign Up
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default ResponsiveCreativeForm

