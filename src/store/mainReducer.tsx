export const getDefaultState = () => ({
  lang: 'fr'
})

const reducer = (state = getDefaultState(), action: any) => {
  switch (action.type) {

    case 'LANG_CHANGE': {
      const { lang } = action.payload
      return {
        ...state,
        lang
      }
    }

    default: {
      return state
    }
  }
}

export default reducer