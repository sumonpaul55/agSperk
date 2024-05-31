import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

const Home = () => {

    return (
        <main className=''>
            <section className='py-20 dark:bg-black dark:text-white'>
                <div className="container mx-auto">
                    <div>
                        <Tabs>
                            <TabList>
                                <Tab>
                                    <button className='text-xl font-bold'>One</button>
                                </Tab>
                                <Tab>Two</Tab>

                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <p>one!</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>two!</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>three!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        <div>
                            <button></button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home