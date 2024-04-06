import { useState } from 'react'

export default function Greeting ({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)]
  const [greeting, setGreeting] = useState(messages[0])
  return (
    <div>
      <h2>{greeting}! Thank you for visitng!</h2>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  )
}
