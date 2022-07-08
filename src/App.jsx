import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import RutaProtegida from './layout/RutaProtegida'
import Login from './paginas/Login'
import { Register } from './paginas/Register' 
import ForgotPassword from './paginas/ForgotPassword'
import ConfirmAccount from './paginas/ConfirmAccount'
import NewPassword from './paginas/NewPassword'
import AdministrarPacientes from './paginas/AdministrarPacientes'
import EditarPerfil from './paginas/EditarPerfil'
import CambiarPassword from './paginas/CambiarPassword'
import { AuthProvider } from './context/AuthProvider'
import { PacientesProvider } from './context/PacientesProvider'

function App() {

   return (
    <BrowserRouter>
          <AuthProvider>
          <PacientesProvider>
                <Routes>
                  <Route path='/'element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="registrar" element={<Register />} />  
                    <Route path="olvide-Password" element={<ForgotPassword />} />
                    <Route path="olvide-Password/:token" element={<NewPassword />} />
                    <Route path="confirmar/:id" element={<ConfirmAccount />} />
                  </Route>

                  <Route path="/admin" element={<RutaProtegida />}>
                            <Route index element={<AdministrarPacientes />} />
                            <Route path="perfil" element={<EditarPerfil />} />
                            <Route path="cambiar-password" element={<CambiarPassword />} />
                        </Route>
                    </Routes>
                </PacientesProvider>
            </AuthProvider>
      </BrowserRouter>
  )
}

export default App
