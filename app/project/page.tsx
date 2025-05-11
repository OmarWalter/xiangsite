// File: /project/page.tsx
export default function ProjectPage() {
  return (
      <section className="py-20 px-4 bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-8 text-center max-w-5xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-white animate-bounce">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* $GME */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-white">$HYPE 🔹</h4>
              <p className="text-gray-300 mb-10 md:text-lg">
                HYPE, the native token of Hyperliquid, a high-performance Layer-1 blockchain
              </p>
              <div className="space-y-2">
                <a
                    href="https://dexscreener.com/hyperliquid/0x13ba5fea7078ab3798fbce53b4d0721c"
                    className="inline-block bg-blue-500 text-white font-bold py-5 px-3 rounded-lg hover:bg-green-400 transition text-base md:text-1xl animate-shine mt-20"
                    target="_self"
                    rel="noopener noreferrer"
                    >
                    DexScreener (Hyperliquid)
                </a>
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-white">$GME 🔹</h4>
              <p className="text-gray-300 mb-10 md:text-lg">
                A meme token with a solid and fun community. Will it moon or dust? Check your entry!
              </p>
              <div className="space-y-2">
                <a
                    href="https://dexscreener.com/ethereum/0x2aEEe741fa1e21120a21E57Db9ee545428E683C9"
                    className="inline-block bg-blue-500 text-white font-bold py-5 px-3 rounded-lg hover:bg-green-400 transition text-base md:text-1xl animate-shine mt-13"
                    target="_self"
                    rel="noopener noreferrer"
                    >
                    DexScreener (Ethereum)
                </a>
              </div>
            </div>

            {/* $WHITE */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-white">$WHITE 🔥</h4>
              <p className="text-gray-300 mb-4 md:text-lg">
                WhiteRock tokenizes real-world assets like stocks, bonds, and derivatives, bridging traditional finance with blockchain.
              </p>
              <div className="space-y-2">
                <a
                    href="https://dexscreener.com/ethereum/0x6Ec94F50cAdcc79984463688dE42A0Ca696EC2db"
                    className="inline-block bg-blue-500 text-white font-bold py-5 px-3 rounded-lg hover:bg-green-400 transition text-base md:text-1xl animate-shine"
                    target="_self"
                    rel="noopener noreferrer"
                    >
                    DexScreener (Ethereum)
                </a>
                <br />
                <a
                    href="https://t.me/Teslacallsofficial"
                    className="inline-block bg-blue-500 text-white font-bold py-5 px-8 rounded-lg hover:bg-green-400 transition text-base md:text-1xl animate-shine"
                    target="_self"
                    rel="noopener noreferrer"
                    >
                    Telegram
                </a>
                <br />
                <a
                    href="https://discord.gg/uUPZn796pm"
                    className="inline-block bg-blue-500 text-white font-bold py-5 px-10 rounded-lg hover:bg-green-400 transition text-base md:text-1xl animate-shine"
                    target="_self"
                    rel="noopener noreferrer"
                    >
                    Discord
                </a>
              </div>
            </div>

            {/* $RIFT */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-white">$RIFT</h4>
              <p className="text-gray-300 mb-4 md:text-lg">
                A marketplace for AI agent modules on Solana. Backed by Faraway ($29M from a16z), with 54.8% community supply.
              </p>
              <div className="space-y-2">
                <a
                    href="https://dexscreener.com/solana/AMEdCZRmPQSnnsVoGjtTm3dJT2LfiBi1eEMjN137q31c"
                    className="inline-block bg-blue-500 text-white font-bold py-5 px-3 rounded-lg hover:bg-green-400 transition text-base md:text-1xl animate-shine mt-5"
                    target="_self"
                    rel="noopener noreferrer"
                    >
                    DexScreener (Solana)
                </a>
                <br />
                <a
                    href="https://x.com/aixbt_agent/status/1884318482466226683"
                    className="inline-block bg-blue-500 text-white font-bold py-5 px-0 rounded-lg hover:bg-green-400 transition text-base md:text-1xl animate-shine"
                    target="_self"
                    rel="noopener noreferrer"
                    >
                    Launch Announcement (X)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}