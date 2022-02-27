import Editor from './pages/Editor'
import FooterSection from './components/layout/FooterSection'

function App() {
  return (
    <div className="flex flex-col bg-main-gray-100 w-screen min-w-[1240px] min-h-screen">
      <div className="flex-[11] flex justify-center items-center px-10 py-5">
        <Editor />
      </div>

      <FooterSection />
    </div>
  )
}

export default App
