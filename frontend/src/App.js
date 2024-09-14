import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//layouts
import MainLayout from './layouts/MainLayout';
//pages
import Home from './pages/Home';
import WordToPdf from './pages/WordToPdf';
import PptxToPdf from './pages/PptxToPdf';
import NotFound from './pages/NotFound';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/word-to-pdf',
          element: <WordToPdf />
        },
        {
          path: '/pptx-to-pdf',
          element: <PptxToPdf />
        },
        {
          path:'*',
          element: <NotFound />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
