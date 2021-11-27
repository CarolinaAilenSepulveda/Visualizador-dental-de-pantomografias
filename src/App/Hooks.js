import React from "react"

import UserContext, {Context} from "./Context"

export function usePage() {
  const {
    state: {page},
  } = React.useContext(UserContext)

  return page
}

export function useChangePage() {
  const {
    actions: {changePage},
  } = React.useContext(UserContext)

  return changePage
}
