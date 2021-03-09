import { Flex } from '@chakra-ui/layout'
import { TabList, TabPanel, TabPanels, Tabs, Tab } from '@chakra-ui/tabs'
import Builder from './Builder'

const FormTabs = ({ children }) => {
  return (
    <Tabs height="100vh">
      <Flex height="100%" direction="column">
        <TabList>
          <Tab>Form</Tab>
          <Tab>Responses</Tab>
        </TabList>
        <TabPanels flexGrow={1} overflowY="auto">
          <TabPanel p={0} h="100%">
            <Builder />
          </TabPanel>
          <TabPanel>Responses</TabPanel>
        </TabPanels>
      </Flex>
    </Tabs>
  )
}

export default FormTabs
