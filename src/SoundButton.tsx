import { useRef, useState } from 'react'

interface SoundButtonProps {
  label: string
  src: string
  category?: string
}

function SoundButton({ label, src, category }: SoundButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  function handleClick() {
    if (!audioRef.current) return
    audioRef.current.currentTime = 0
    audioRef.current.play()
    setPlaying(true)
  }

  const cls = ['sound-btn', playing ? 'playing' : '', category ? `cat-${category}` : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className="sound-card">
      <audio ref={audioRef} src={src} onEnded={() => setPlaying(false)} />
      <button className={cls} onClick={handleClick}>
        <span className="sound-icon">{playing ? '🔊' : '🔔'}</span>
        {label}
      </button>
    </div>
  )
}

export default SoundButton
