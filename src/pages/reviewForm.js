import FormTabs from '../components/FormTabs'
import { NavigationConfirmModal } from 'react-router-navigation-confirm'
import { useContext } from 'react'
import { BuilderContext } from '../contexts/builderContext'

const ReviewForm = () => {
  const { clearBlocks } = useContext(BuilderContext)
  return (
    <>
      <FormTabs />
      <NavigationConfirmModal onConfirm={clearBlocks} />
    </>
  )
}

export default ReviewForm
