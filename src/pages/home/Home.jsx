import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Portal, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { BiDotsHorizontal, BiEdit } from 'react-icons/bi'

import { FaEye } from 'react-icons/fa'
import { RxAvatar } from 'react-icons/rx'

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isPending, error, data } = useQuery({
        queryKey: ['orders'],
        queryFn: () =>
            fetch('data.json').then((res) =>
                res.json(),
            ),
    })
    // console.log(data)

    if (isPending) {
        return <Spinner />
    }
    return (
        <main className=''>
            <section className='py-10 dark:bg-black dark:text-white'>
                <div className="container mx-auto">
                    <div>
                        <Tabs colorScheme='green'>
                            <div className='flex justify-between dark:bg-slate-800 p-2 rounded-md'>
                                <TabList className='space-x-4'>
                                    <Tab _selected={{ color: 'white', bg: '#2563eb' }} className='text-lg font-semibold border p-2 rounded-md'>
                                        Active Sale Order
                                    </Tab>
                                    <Tab _selected={{ color: 'white', bg: '#2563eb' }} className='text-lg font-semibold border p-2 rounded-md'>
                                        Completed Sale Order
                                    </Tab>
                                </TabList>
                                <button onClick={onOpen} className='text-lg font-semibold border p-2 rounded-md hover:bg-blue-600 hover:text-white'>+ Sale Order</button>
                            </div>

                            <TabPanels className='mt-4'>
                                <TabPanel>
                                    <table className='w-full table-fixed'>
                                        <thead>
                                            <tr className='border border-black bg-slate-300 dark:bg-black dark:border-white'>
                                                <th className='py-2 text-lg'>ID</th>
                                                <th className='py-2 text-lg'>Customer Name</th>
                                                <th className='py-2 text-lg'>Price ₹</th>
                                                <th className='py-2 text-lg'>Last Modified</th>
                                                <th className='py-2 text-lg'>Edit View</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data?.map(items => (
                                                    <tr key={items.sku[0].id} className='border border-t-0 border-black dark:border-white'>{console.log()}
                                                        <td className='text-center text-base py-2'>{items.sku[0].id}</td>
                                                        <td className='text-center text-base py-2 flex items-center gap-2'>{items.sku[0].customer_profile.profile_pic ? <img src={items.sku[0].customer_profile.profile_pic} alt="" /> : <RxAvatar className='text-xl text-indigo-600' />}{items.sku[0].customer_profile.name}</td>
                                                        <td className='text-center text-base py-2'>{items.sku[0].selling_price}</td>
                                                        <td className='text-center text-base py-2'>{items.updated_on.slice(0, 10)}</td>
                                                        <td className='text-center py-2 text-xl'>
                                                            <div>
                                                                <Popover>
                                                                    <PopoverTrigger>
                                                                        <Button><BiDotsHorizontal></BiDotsHorizontal></Button>
                                                                    </PopoverTrigger>
                                                                    <Portal>
                                                                        <PopoverContent>
                                                                            <PopoverArrow />
                                                                            {/* <PopoverCloseButton /> */}
                                                                            <PopoverBody className='bg-slate-500 p-2 rounded-md space-x-3'>
                                                                                <Button colorScheme='blue'><BiEdit className='text-white text-2xl hover:text-blue-300' /></Button>
                                                                                <Button colorScheme='blue'><FaEye className='text-white text-2xl hover:text-blue-300' /></Button>
                                                                            </PopoverBody>
                                                                        </PopoverContent>
                                                                    </Portal>
                                                                </Popover></div>                                               </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </TabPanel>
                                <TabPanel>
                                    <p>two!</p>
                                </TabPanel>

                            </TabPanels>
                        </Tabs>
                        <div>
                            <button></button>
                        </div>
                    </div>
                    {/* modal form for create orders */}
                    <Modal isOpen={isOpen} onClose={onClose}>
                        {/* <ModalOverlay /> */}
                        <ModalContent className="max-w-[600px] bg-slate-700 mx-auto md:mt-52 p-4 text-white">
                            <ModalHeader className='font-bold text-lg'>Make a Sales Order</ModalHeader>
                            {/* <ModalCloseButton /> */}
                            <ModalBody>
                                <form action="" className='mt-6 space-y-5'>
                                    <div className='flex gap-3 items-center'>
                                        <div className='flex gap-1 flex-col flex-1'>
                                            <label htmlFor="">Id</label>
                                            <input type="text" placeholder='Enter Customer Name' className='border-0 outline-0 p-1 rounded text-black' />
                                        </div>
                                        <div className='flex gap-1 flex-col flex-1'>
                                            <label htmlFor="">Customer Name</label>
                                            <input type="text" placeholder='Enter Customer Name' className='border-0 outline-0 p-1 rounded text-black' />
                                        </div>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <div className='flex gap-1 flex-col flex-1'>
                                            <label htmlFor="">Price</label>
                                            <input type="number" placeholder='Enter Customer Name' className='border-0 outline-0 p-1 rounded text-black' />
                                        </div>
                                        <div className='flex gap-1 flex-col flex-1'>
                                            <label htmlFor="">Date</label>
                                            <input type="date" placeholder='Enter Customer Name' className='border-0 outline-0 p-1 rounded text-black' />
                                        </div>
                                    </div>
                                </form>
                            </ModalBody>

                            <ModalFooter className='space-x-3 mt-5'>
                                <Button className='bg-blue-500 text-white p-2 rounded hover:bg-blue-700' onClick={onClose}>
                                    Close
                                </Button>
                                <Button className='bg-blue-500 text-white p-2 rounded hover:bg-blue-700'>Secondary Action</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </div>
            </section>
        </main >
    )
}

export default Home