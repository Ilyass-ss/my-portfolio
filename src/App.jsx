import React, { useState, useEffect, useMemo } from 'react'

const App = () => {
  const [activeTab, setActiveTab] = useState('home')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = useMemo(() => [
    { name: 'React', level: '90%', color: '#61DAFB' },
    { name: 'JavaScript', level: '85%', color: '#F7DF1E' },
    { name: 'Tailwind', level: '95%', color: '#38B2AC' },
    { name: 'CSS', level: '92%', color: '#264DE4' },
    { name: 'HTML', level: '98%', color: '#E34F26' },
    { name: 'Python', level: '70%', color: '#3776AB' }
  ], [])

  const projects = useMemo(() => [
    { 
      title: 'BANK APP', 
      category: 'FINTECH / FULLSTACK', 
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      demoUrl: 'https://bank-app-iota-azure.vercel.app/', 
      githubUrl: 'https://github.com/Ilyass-ss/bank-app.git'
    },
    { 
      title: 'CYBER UI', 
      category: 'WEB DESIGN', 
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
      demoUrl: '#', 
      githubUrl: '#'
    }
  ], [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#07051F] text-white p-6 md:p-12 font-sans antialiased relative overflow-hidden">
      
      <style>{`
        @keyframes slowGlow {
          0%, 100% { opacity: 0.3; transform: translate(-5%, -5%) scale(1); }
          50% { opacity: 0.7; transform: translate(5%, 5%) scale(1.2); }
        }
        @keyframes textFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes growLine {
          from { width: 0; }
          to { width: var(--progress); }
        }
        .ambient-light-1 {
          position: fixed;
          top: -10%;
          left: -10%;
          width: 70vw;
          height: 70vw;
          background: radial-gradient(circle, rgba(62, 102, 237, 0.25) 0%, transparent 70%);
          filter: blur(120px);
          animation: slowGlow 8s ease-in-out infinite;
          pointer-events: none;
        }
        .ambient-light-2 {
          position: fixed;
          bottom: -15%;
          right: -5%;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, rgba(46, 75, 243, 0.2) 0%, transparent 70%);
          filter: blur(120px);
          animation: slowGlow 12s ease-in-out infinite reverse;
          pointer-events: none;
        }
        .logo-motion {
          background: linear-gradient(to right, #ffffff, #3E66ED, #6366f1, #ffffff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: textFlow 4s linear infinite;
        }
      `}</style>

      <div className="ambient-light-1"></div>
      <div className="ambient-light-2"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col min-h-[90vh]">
        <nav className="flex justify-between items-center mb-12 w-full">
          <div className="text-xl font-black tracking-tighter text-left uppercase logo-motion cursor-pointer" onClick={() => setActiveTab('home')}>
            ILYASS<span>.</span>
          </div>
          <div className="bg-[#10132E]/40 border border-white/5 px-6 py-2 rounded-full flex gap-8 backdrop-blur-xl">
            <button onClick={() => setActiveTab('home')} className={`text-[9px] font-bold uppercase tracking-[0.2em] transition-colors ${activeTab === 'home' ? 'text-white' : 'text-white/30 hover:text-white'}`}>Home</button>
            <button onClick={() => setActiveTab('skills')} className={`text-[9px] font-bold uppercase tracking-[0.2em] transition-colors ${activeTab === 'skills' ? 'text-white' : 'text-white/30 hover:text-white'}`}>Skills</button>
            <button onClick={() => setActiveTab('works')} className={`text-[9px] font-bold uppercase tracking-[0.2em] transition-colors ${activeTab === 'works' ? 'text-white' : 'text-white/30 hover:text-white'}`}>Works</button>
          </div>
          <button onClick={() => setActiveTab('contact')} className={`text-[10px] font-bold uppercase tracking-[0.2em] border-b transition-all ${activeTab === 'contact' ? 'border-white text-white' : 'border-white/20 text-white/40 hover:text-white hover:border-white'}`}>Contact</button>
        </nav>

        {activeTab === 'home' && (
          <main className="flex-grow flex flex-col justify-center items-center animate-[slideUp_0.6s_ease-out]">
            <h1 className="text-[8vw] md:text-[6.5rem] font-[1000] tracking-[-0.05em] leading-[0.85] mb-8 text-center">
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Ilyass</span>
              <br />
              <span className="bg-gradient-to-b from-[#3E66ED]/40 to-[#3E66ED]/10 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            {/* <p className="text-white/40 max-w-lg mx-auto text-lg font-light leading-relaxed mb-16 tracking-wide text-center">
              Digital craftsmanship through <span className="text-[#3E66ED] font-medium">Deep Blue</span> aesthetics and immersive motion.
            </p> */}
            <button onClick={() => setActiveTab('works')} className="group relative px-16 py-5 rounded-full border border-white/10 bg-[#10132E] transition-all duration-500 hover:bg-white hover:text-black overflow-hidden shadow-[0_0_40px_rgba(62,102,237,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3E66ED]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.6em]">View Works</span>
            </button>
          </main>
        )}

        {activeTab === 'skills' && (
          <main className="flex-grow flex flex-col justify-center animate-[slideUp_0.8s_ease-out_forwards]">
            <div className="max-w-3xl mx-auto w-full">
              <h2 className="text-4xl font-black mb-12 tracking-tight uppercase">Tech <span className="text-[#3E66ED]">Stack</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-sm font-bold uppercase tracking-widest text-white/80 group-hover:text-white">{skill.name}</span>
                      <span className="text-xs font-medium text-white/30">{skill.level}</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                      <div className="h-full absolute left-0 top-0 animate-[growLine_1.5s_ease-out_forwards]" style={{ '--progress': skill.level, backgroundColor: skill.color, boxShadow: `0 0 15px ${skill.color}80` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}

        {activeTab === 'works' && (
          <main className="flex-grow py-12 animate-[slideUp_0.8s_ease-out_forwards]">
            <h2 className="text-4xl font-black mb-12 tracking-tight uppercase">Latest <span className="text-[#3E66ED]">Works</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <div key={index} className="group relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/5 bg-[#10132E]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover lg:grayscale lg:opacity-40 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07051F] via-[#07051F]/40 to-transparent opacity-80" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[10px] font-black tracking-[0.3em] text-[#3E66ED] uppercase mb-2">{project.category}</p>
                    <h3 className="text-3xl font-bold uppercase tracking-tighter mb-6">{project.title}</h3>
                    
                    <div className="flex gap-4 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#3E66ED] hover:text-white transition-colors">Live Demo</a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white/20 transition-colors">Github</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        )}

{activeTab === 'contact' && (
  <main className="flex-grow flex flex-col justify-center animate-[slideUp_0.8s_ease-out_forwards]">
    <div className="max-w-xl mx-auto w-full space-y-8">
      <h2 className="text-4xl font-black mb-8 tracking-tight text-center uppercase">Get in <span className="text-[#3E66ED]">Touch</span></h2>
      
      <form 
        action="https://formspree.io/f/xpqkzper"
        method="POST"
        className="space-y-4"
      >
        <input 
          name="name" 
          type="text" 
          placeholder="NAME" 
          required 
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-[10px] font-bold tracking-widest focus:outline-none focus:border-[#3E66ED] transition-colors" 
        />
        <input 
          name="email"
          type="email" 
          placeholder="EMAIL" 
          required 
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-[10px] font-bold tracking-widest focus:outline-none focus:border-[#3E66ED] transition-colors" 
        />
        <textarea 
          name="message"
          placeholder="MESSAGE" 
          rows="4" 
          required 
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-[10px] font-bold tracking-widest focus:outline-none focus:border-[#3E66ED] transition-colors resize-none"
        ></textarea>
        
        <button 
          type="submit" 
          className="w-full bg-white text-black font-black py-5 rounded-xl uppercase tracking-[0.4em] text-[10px] hover:bg-[#3E66ED] hover:text-white transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  </main>
)}
        <footer className="mt-auto pb-6 w-full flex justify-between items-center opacity-20 text-[9px] tracking-[0.4em] uppercase border-t border-white/5 pt-8 font-bold">
          <div>© 2026 ILYASS</div>

<div className="flex gap-10">
  {Object.entries({
    Github: 'https://github.com/Ilyass-ss',
    LinkedIn: 'https://www.linkedin.com/in/ilyass-74846932b/',
    WhatsApp: 'https://wa.me/212660237709' 
  }).map(([name, url]) => (
    <a 
      key={name} 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-white cursor-pointer transition-colors uppercase tracking-widest"
    >
      {name}
    </a>
  ))}
</div>        </footer>
      </div>
    </div>
  )
}

export default App