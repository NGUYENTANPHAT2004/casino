import React, { Fragment } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { publicRoutes } from './router'
import { DefaultLayout } from './Layout/LayoutLapTop/DefaultLayout'
import ToastProvider from './components/useToast/ToastContext'
import { useMediaQuery } from 'react-responsive'
import { DefaultLayoutMB } from './Layout/LayoutMobile/DefaultLayoutMB'
function App () {
  const IsMobile = () => {
    return useMediaQuery({ query: '(max-width: 752px)' })
  }

  return (
    <ToastProvider>
      <Router>
        <div className='App'>
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout

              if (IsMobile()) {
                Layout = DefaultLayoutMB
              } else {
                Layout = DefaultLayout
              }
              const Page = route.component

              if (route.layout === null) {
                Layout = Fragment
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })}
          </Routes>
        </div>
      </Router>
    </ToastProvider>
  )
}

export default App
