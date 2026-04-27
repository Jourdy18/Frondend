import { useState } from 'react'
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa'

const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg z-50"
      >
        {open ? <FaTimes /> : <FaRobot />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-2xl z-50 overflow-hidden">
          <div className="bg-black text-white p-4">
            Chat Assistant
          </div>

          <div className="h-80 p-4 overflow-y-auto">
            <div className="bg-gray-100 p-3 rounded-lg mb-3">
              Halo! Ada yang bisa saya bantu?
            </div>
          </div>

          <div className="p-4 flex gap-2 border-t">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ketik pesan..."
              className="flex-1 border rounded-lg px-3 py-2"
            />
            <button className="bg-black text-white px-4 rounded-lg">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot