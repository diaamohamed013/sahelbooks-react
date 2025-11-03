import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './front-site/i18n/i18n'
import { RouterProvider } from 'react-router-dom'
import { router } from './front-site/routes/Routes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './front-site/assets/front/css/fontawesome-override.css'
import 'sweet-alert/sweet-alert.css'
// import 'select2/dist/css/select2.min'
// import './front-site/assets/front/css/intltelinput.css'
// import './front-site/assets/front/css/owl-carousel/owl.carousel.min.css'
// import './front-site/assets/front/css/owl-carousel/owl.theme.green.css'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
)
