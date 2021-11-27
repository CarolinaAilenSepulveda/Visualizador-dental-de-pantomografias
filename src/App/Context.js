import React from "react"

const UserContext = React.createContext()

const UserProvider = ({children}) => {
  const [page, setPage] = React.useState("Bienvenida")

  const handleChangePage = (page) => {
    setPage(page)
  }

  const state = {
    page,
  }

  const actions = {
    changePage: handleChangePage,
  }

  return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>
}

export {UserContext as default, UserProvider as Provider}
