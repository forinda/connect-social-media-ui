import HomeComponent from "pages/HomeComponent"
import React from "react"
import HomeLogin from "pages/HomeLogin"
import HomeRegistration from "pages/HomeRegistration"

export type HomepageTypes = { page: "home" | "login" | "register", setPage: (state: HomepageTypes['page']) => void }
const HomeSwitcher = ({ page, setPage }: HomepageTypes) => (
   (
      page === "login" 
      ? <HomeLogin page={page} setPage={setPage} /> 
      : page === "register" 
      ? <HomeRegistration page={page} setPage={setPage} /> 
      : <HomeComponent page={page} setPage={setPage} />
   )
)
export default React.memo(HomeSwitcher)