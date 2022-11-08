import { PdfViewer } from './components/PdfViewer';
import samplePdf from './assets/sample.pdf';

function App() {
  return (
    <div className="App">
      <PdfViewer pdf={samplePdf} />
    </div>
  )
}

export default App
