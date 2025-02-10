import React from 'react'
import Navbar from './components/Navbar'
import {Routes , Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import { useAuthStore } from './store/useAuthStore'
import {Loader} from "lucide-react"
import {Toaster} from "react-hot-toast"
import { useThemeStore } from './store/useThemeStore'

const App = () => {
  // const{authUser , checkAuth , isCheckingAuth}= useAuthStore()

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);
  // console.log({authUser})

  // if(isCheckingAuth && !authUser ) return (
  //   <div className='flex items-center      justify-center h-screen'>
  //       <Loader className='size-9 animate-spin'/> 
  //   </div>
  // )
  const { theme } = useThemeStore()
  return (
    <div data-theme={theme}>
     <Navbar />
     <div className="flex-1 overflow-auto pt-10">
      <Routes>
          {/* <Route path='/' element={authUser? <HomePage/> : <Navigate to="/login" />}/>*/} 

          {/* <Route path='/signup' element={!authUser ? <SignUpPage/> : <Navigate to="/" />} /> */}

          {/* <Route path='/login' element={!authUser ?<LoginPage/> : <Navigate to="/"/>}/> */}

          {/* <Route path='/profile' element={authUser? <ProfilePage/>: <Navigate to="/login" />}/> */}

        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
        <Route path='/profile' element={ <ProfilePage/> }/>
      </Routes>
     </div>
    

     <Toaster /> 

    </div>
  )
}

export default App