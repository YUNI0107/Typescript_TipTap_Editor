import Editor from './pages/Editor'
import FooterSection from './components/layout/FooterSection'

function App() {
  return (
    <div className="bg-main-gray-100 w-screen min-w-[1240px] min-h-screen flex justify-center items-center p-10">
      <Editor />
      <FooterSection />
    </div>
  )
}

export default App
