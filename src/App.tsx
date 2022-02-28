// components
import Editor from './pages/Editor'
import FooterSection from './components/layout/FooterSection'
import Dialog from './components/common/Dialog'

// provider
import DialogProvider from './components/layout/DialogProvider'

function App() {
  return (
    <div className="flex flex-col bg-main-gray-100 w-screen min-w-[1240px] min-h-screen">
      <DialogProvider>
        <Dialog />
        <div className="flex-[11] flex justify-center items-center px-10 py-5">
          <Editor />
        </div>
      </DialogProvider>

      <FooterSection />
    </div>
  )
}

export default App
