import FormTabs from '../components/FormTabs'
import {
  NavigationConfirmModal,
  HistoryListener
} from 'react-router-navigation-confirm'
import { useContext, useRef } from 'react'
import { BuilderContext } from '../contexts/builderContext'

const ReviewForm = () => {
  const { clearBlocks } = useContext(BuilderContext)

  const deleted = useRef(false)

  return (
    <>
      <HistoryListener>
        <NavigationConfirmModal
          when={() => {
            return !deleted.current
          }}
          onConfirm={clearBlocks}
        />
      </HistoryListener>
      <FormTabs deletedRef={deleted} />
    </>
  )
}

export default ReviewForm
