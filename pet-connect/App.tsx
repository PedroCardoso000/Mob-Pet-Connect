import "@/global.css";
import AppNavigator from "./src/navigator/app_navigator";
import { AuthProvider } from "./src/context/AuthContext" 


export default function App() {
  return (
    <>
      <AuthProvider>
        <AppNavigator/>
      </AuthProvider>
    </>
  )
}

