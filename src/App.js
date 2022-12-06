import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [htmlFileString, setHtmlFileString] = useState()

  async function fetchHtml() {
    setHtmlFileString(
      await (await fetch(`./components/components/header/text.htm`)).text()
    )
  }
  useEffect(() => {
    fetchHtml()
  }, [])

  return (
    <div className='App'>
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  )
}

export default App
