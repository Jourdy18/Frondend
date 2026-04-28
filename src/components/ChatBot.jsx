import { useState, useRef, useEffect } from 'react'
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa'

const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Halo! Ada yang bisa saya bantu?' }
  ])

  const bottomRef = useRef(null)

  // auto scroll ke bawah
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!message.trim()) return

    const userMessage = { sender: 'user', text: message }

    // 🔥 dummy response (bisa diganti API nanti)
    let botReply = 'Maaf, saya belum mengerti 😅'

    if (message.toLowerCase().includes('stok')) {
      botReply = 'Stok tersedia 👍'
    } else if (message.toLowerCase().includes('harga')) {
      botReply = 'Harga mulai dari Rp 500.000'
    } else if (message.toLowerCase().includes('sepatu')) {
      botReply = 'Kami punya banyak pilihan sepatu keren 👟'
    }

    const botMessage = { sender: 'bot', text: botReply }

    setMessages([...messages, userMessage, botMessage])
    setMessage('')
  }

  return (
    <>
      {/* tombol buka chat */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg z-50"
      >
        {open ? <FaTimes /> : <FaRobot />}
      </button>

      {/* box chat */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col">

          <div className="bg-black text-white p-4">
            Chat Assistant
          </div>

          {/* chat messages */}
          <div className="h-80 p-4 overflow-y-auto space-y-3">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-[80%] ${
                  msg.sender === 'user'
                    ? 'bg-black text-white ml-auto'
                    : 'bg-gray-100 text-black'
                }`}
              >
                {msg.text}
              </div>
            ))}

            <div ref={bottomRef}></div>
          </div>

          {/* input */}
          <div className="p-4 flex gap-2 border-t">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ketik pesan..."
              className="flex-1 border rounded-lg px-3 py-2"
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-black text-white px-4 rounded-lg"
            >
              <FaPaperPlane />
            </button>
          </div>

        </div>
      )}
    </>
  )
}

export default ChatBot