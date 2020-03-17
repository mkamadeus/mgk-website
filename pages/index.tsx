import Head from 'next/head'
import React from 'react'
import '../styles/index.css'

class IndexPage extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Nunito+Sans|Nunito:400,600,700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <div className="w-full bg-red-500 mx-auto flex flex-row">
            <div className="decoration-container">
              <div className="grid grid-cols-3 grid-container">
                <div className="bg-gray-800 grid-items"></div>
                <div className="bg-gray-700 grid-items"></div>
                <div className="bg-gray-800 grid-items"></div>
                <div className="bg-gray-700 grid-items"></div>
                <div className="bg-gray-700 grid-items"></div>
                <div className="bg-gray-800 grid-items"></div>
                <div className="bg-gray-700 grid-items"></div>
                <div className="bg-gray-800 grid-items"></div>
                <div className="bg-gray-800 grid-items"></div>
                <div className="bg-gray-700 grid-items"></div>
                <div className="bg-gray-800 grid-items"></div>
                <div className="bg-gray-700 grid-items"></div>
                <div className="bg-gray-700 grid-items"></div>
                <div className="bg-gray-800 grid-items"></div>
                <div className="bg-gray-700 grid-items"></div>
                <div className="bg-gray-800 grid-items"></div>
              </div>
            </div>
            <div className="p-6 flex flex-col align-middle justify-center flex-1">
              <div>
                <div className="text-6xl header-font">
                  Mitra Gaya Kreativa
                </div>
                <div className="text-xl body-font">
                  Kami adalah perusahaan yang bergerak dalam produksi tas spundbond yang ramah lingkungan.
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    )
  }
}
export default IndexPage
