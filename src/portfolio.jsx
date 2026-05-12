import { useState } from "react";

export default function Portfolio() {
  
  const [activeTab, setActiveTab] = useState('home');

  return (
    <>
    
  {activeTab === 'home' && (
    <main className="main relative w-screen h-screen grid grid-rows-12 text-white overflow-hidden">

        {/* <div className="absolute bottom-0 z-1 w-full h-[300px]">
        <svg className="absolute bottom-0 opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className=" wave1" fill="#5c6269" fillOpacity="1" d="M0,160L80,186.7C160,213,320,267,480,272C640,277,800,235,960,192C1120,149,1280,107,1360,85.3L1440,64L1440,320L0,320Z"></path></svg>
        <svg className="absolute bottom-0 opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className=" wave2" fill="#5c6269" fillOpacity="1" d="M0,96L80,117.3C160,139,320,181,480,208C640,235,800,245,960,240C1120,235,1280,213,1360,202.7L1440,192L1440,320L0,320Z"></path></svg>
        <svg className="absolute bottom-0 opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className=" wave3" fill="#5c6269" fillOpacity="1" d="M0,256L60,261.3C120,267,240,277,360,261.3C480,245,600,203,720,170.7C840,139,960,117,1080,128L1440,224L1440,320L0,320Z"></path></svg>
        <svg className="absolute bottom-0 opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className=" wave4" fill="#5c6269" fillOpacity="1" d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,202.7L1440,128L1440,320L0,320Z"></path></svg>
        </div> */}


<svg className="waves absolute bottom-0 z-1 w-[200%] h-[15vh] min-h-[100px] max-h-[150px]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
    </defs>
    <g className="parallax">
      <use xlinkHref="#gentle-wave" x="48" y="0" fill="#5c626980"></use>
      <use xlinkHref="#gentle-wave" x="48" y="3" fill="#5c626960"></use>
      <use xlinkHref="#gentle-wave" x="48" y="5" fill="#5c626940"></use>
      <use xlinkHref="#gentle-wave" x="48" y="7" fill="#5c626920"></use>
    </g>
  </svg>

      <nav className="relative z-10 flex justify-between items-center row-span-1 p-2 m-2">
        <div className="myname-bg">
          <span className="myname">ILYASS.</span>
        </div>
        <div>
          <ul className="flex gap-2">
            <li><button className="hover:text-[#1a1c1f] cursor-pointer" onClick={() => setActiveTab('home')}>Home</button></li>
            <li><button className="hover:text-[#1a1c1f] cursor-pointer" onClick={() => setActiveTab('works')}>Works</button></li>
          </ul>
        </div>
        <div>
          <button className="hover:text-[#1a1c1f] cursor-pointer" onClick={() => setActiveTab('contact')}>Contact</button>
        </div>
      </nav>

      <div className="relative w-screen row-span-10 flex flex-col gap-5 justify-center items-center z-2">

        <span className="text-[30px] text-[#5c6269]"><span className="text-[#1a1c1f]">I</span>lyass <span className="text-[40px] text-[#1a1c1f]">P</span>ort<span className="text-[40px] text-[#1a1c1f]">f</span>olio</span>
        <button className="group view-works min-w-[200px] min-h-[60px] bg-[#1a1c1f] text-[#5c6269] rounded-4xl cursor-pointer shadow-lg shadow-[#1a1c1f]/50 transition-all duration-1000" onClick={() => setActiveTab('works')}>
            <span className="view-works w-[100%] h-[100%] text-[20px] text-transparent text-center content-center min-[769px]:group-hover:scale-110 min-[769px]:group-hover:tracking-widest min-[769px]:group-hover:drop-shadow-[0_0_5px_#ffffff] transition-all duration-1000 inline-block">View Works</span>
        </button>
      </div>
    
      <footer className="row-span-1 flex justify-end z-2">
        <div>
          <ul className="flex gap-3 p-2">
              {
                Object.entries(
                  {
                    Github: 'https://github.com/Ilyass-ss',
                    Linkedin: 'https://www.linkedin.com/in/ilyass-74846932b/',
                  }
                ).map(([name, url], index) => {
                  return (
                    <li className="hover:text-[#1a1c1f]" key={index}><a href={url} target="_blank" rel={"noopener noreferrer"}>{name}</a></li>
                  )
                })
              }
          </ul>
        </div>
      </footer>
    </main>
  )}

  {activeTab === 'works' && (
        <main className="main relative w-screen h-screen grid grid-rows-12 text-white overflow-hidden">

        {/* <div className="absolute bottom-0 z-1 w-full h-[300px]">
        <svg className="absolute bottom-0 opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className=" wave1" fill="#5c6269" fill-opacity="1" d="M0,160L80,186.7C160,213,320,267,480,272C640,277,800,235,960,192C1120,149,1280,107,1360,85.3L1440,64L1440,320L0,320Z"></path></svg>
        <svg className="absolute bottom-0 opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className=" wave2" fill="#5c6269" fill-opacity="1" d="M0,96L80,117.3C160,139,320,181,480,208C640,235,800,245,960,240C1120,235,1280,213,1360,202.7L1440,192L1440,320L0,320Z"></path></svg>
        <svg className="absolute bottom-0 opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className=" wave3" fill="#5c6269" fill-opacity="1" d="M0,256L60,261.3C120,267,240,277,360,261.3C480,245,600,203,720,170.7C840,139,960,117,1080,128L1440,224L1440,320L0,320Z"></path></svg>
        <svg className="absolute bottom-0 opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className=" wave4" fill="#5c6269" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,202.7L1440,128L1440,320L0,320Z"></path></svg>
        </div> */}


      <nav className="relative z-10 flex justify-between items-center row-span-1 p-2 m-2">
        <div className="myname-bg">
          <span className="myname">ILYASS.</span>
        </div>
        <div>
          <ul className="flex gap-2">
            <li><button className="hover:text-[#1a1c1f] cursor-pointer" onClick={() => setActiveTab('home')}>Home</button></li>
            <li><button className="hover:text-[#1a1c1f] cursor-pointer" onClick={() => setActiveTab('works')}>Works</button></li>
          </ul>
        </div>
        <div>
          <button className="hover:text-[#1a1c1f] cursor-pointer" onClick={() => setActiveTab('contact')}>Contact</button>
        </div>
      </nav>
      
      <div className="relative w-screen p-2 row-span-10 grid grid-cols-12 gap-5 z-2">
          {
            Object.entries({
              Weather: {
                bg: 'https://t4.ftcdn.net/jpg/02/66/38/15/360_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg',
                github: 'https://github.com/Ilyass-ss/weather-app',
                vercel: 'https://weather-app-six-kappa-94.vercel.app/'
              },
              Terminal: {
                bg: 'https://korben.info/cdn-cgi/image/width=960,height=1440,fit=scale-down,quality=90,f=avif/ghostty-terminal-natif-rapide-personnalisable/ghostty-terminal-natif-rapide-personnalisable-1.webp',
                github: 'https://github.com/Ilyass-ss/my-terminal',
                vercel: 'https://my-terminal-gamma.vercel.app/'
              },
              BankApp: {
                bg: 'https://onemoneyway.com/wp-content/uploads/2024/11/Ist-es-sicher-Bankdaten-anzugeben-1024x576.png',
                github: 'https://github.com/Ilyass-ss/bank-app',
                vercel: 'https://bank-app-iota-azure.vercel.app/'
              },
            }).map(([name, {bg, github, vercel}], index) => {
              return (
                <div key={index} className="group relative h-[100%] col-span-4 bg-cover bg-center min-[768px]:opacity-50 min-[768px]:grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000 overflow-hidden" style={{backgroundImage: `url(${bg})`}}>
                  <div className="absolute bottom-4 left-4 min-[768px]:translate-y-[120%] min-[768px]:group-hover:translate-y-0 transition-all duration-1000">
                    <h3>{name}</h3>
                    <div className="flex max-[768px]:flex-col gap-2 pt-2 ">
                      <a href={vercel} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-[#5c6269] text-center rounded-[5px] min-[768px]:opacity-70 min-[768px]:hover:opacity-100">Show</a>
                      <a href={github} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-[#1a1c1f] text-center rounded-[5px] min-[768px]:opacity-70 min-[768px]:hover:opacity-100">Github</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
      </div>
    
      <footer className="row-span-1 flex justify-end z-2 bg-[#5c6269]">
        <div>
          <ul className="flex gap-3 p-2">
              {
                Object.entries(
                  {
                    Github: 'https://github.com/Ilyass-ss',
                    Linkedin: 'https://www.linkedin.com/in/ilyass-74846932b/',
                  }
                ).map(([name, url], index) => {
                  return (
                    <li className="hover:text-[#1a1c1f]" key={index}><a href={url} target="_blank" rel={"noopener noreferrer"}>{name}</a></li>
                  )
                })
              }
          </ul>
        </div>
      </footer>
    </main>
  )}

  {activeTab === 'contact' && (
        <main className="main relative w-screen h-screen grid grid-rows-12 text-white overflow-hidden">

        {/* <div className="absolute bottom-0 z-1 w-full h-[300px]">
        <svg className="absolute bottom-0 opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className=" wave1" fill="#5c6269" fill-opacity="1" d="M0,160L80,186.7C160,213,320,267,480,272C640,277,800,235,960,192C1120,149,1280,107,1360,85.3L1440,64L1440,320L0,320Z"></path></svg>
        <svg className="absolute bottom-0 opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className=" wave2" fill="#5c6269" fill-opacity="1" d="M0,96L80,117.3C160,139,320,181,480,208C640,235,800,245,960,240C1120,235,1280,213,1360,202.7L1440,192L1440,320L0,320Z"></path></svg>
        <svg className="absolute bottom-0 opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className=" wave3" fill="#5c6269" fill-opacity="1" d="M0,256L60,261.3C120,267,240,277,360,261.3C480,245,600,203,720,170.7C840,139,960,117,1080,128L1440,224L1440,320L0,320Z"></path></svg>
        <svg className="absolute bottom-0 opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className=" wave4" fill="#5c6269" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,202.7L1440,128L1440,320L0,320Z"></path></svg>
        </div> */}


      <nav className="relative z-10 flex justify-between items-center row-span-1 p-2 m-2">
        <div className="myname-bg">
          <span className="myname">ILYASS.</span>
        </div>
        <div>
          <ul className="flex gap-2">
            <li><button className="hover:text-[#1a1c1f] cursor-pointer" onClick={() => setActiveTab('home')}>Home</button></li>
            <li><button className="hover:text-[#1a1c1f] cursor-pointer" onClick={() => setActiveTab('works')}>Works</button></li>
          </ul>
        </div>
        <div>
          <button className="hover:text-[#1a1c1f] cursor-pointer" onClick={() => setActiveTab('contact')}>Contact</button>
        </div>
      </nav>
      
      <div className="relative w-screen p-2 row-span-10 flex justify-center items-center z-2">
          <form action="https://formspree.io/f/xpqkzper" method="POST" className="flex flex-col gap-3 w-full md:w-1/2 max-w-screen-sm bg-[#1a1c1f] opacity-50 p-5 rounded-lg">
            <div className="flex justify-center">
            <h1 className="">Contact us</h1>
            </div>
            <div className="flex gap-2 justify-center items-center p-2">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="flex-1 h-[40px] outline-none border rounded-2xl p-2 focus:border-blue-400"/>
            </div>
            <div className="flex gap-2 justify-center items-start p-2">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows={5} className="flex-1 resize-none outline-none border rounded-2xl p-2 focus:border-blue-400 overflow-hidden"></textarea>
            </div>
            <button type="submit" className="bg-[#5c6269] py-1 rounded-sm sm:opacity-70 hover:opacity-100 cursor-pointer">Send</button>
          </form>
      </div>
    
      <footer className="row-span-1 flex justify-end z-2 bg-[#5c6269]">
        <div>
          <ul className="flex gap-3 p-2">
              {
                Object.entries(
                  {
                    Github: 'https://github.com/Ilyass-ss',
                    Linkedin: 'https://www.linkedin.com/in/ilyass-74846932b/',
                  }
                ).map(([name, url], index) => {
                  return (
                    <li className="hover:text-[#1a1c1f]" key={index}><a href={url} target="_blank" rel={"noopener noreferrer"}>{name}</a></li>
                  )
                })
              }
          </ul>
        </div>
      </footer>
    </main>

  )}

    
    </>  
  )
}

