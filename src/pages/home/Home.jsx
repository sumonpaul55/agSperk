import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Portal, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { BiDotsHorizontal, BiEdit } from 'react-icons/bi'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaEye } from 'react-icons/fa'
import { RxAvatar } from 'react-icons/rx'
import { useForm } from "react-hook-form"
import AllProduct from './AllProduct';
const Home = () => {

    const [orderData, setOrderData] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const { isOpen, onOpen, onClose } = useDisclosure()


    const { isPending, data } = useQuery({
        queryKey: ['orders'],
        queryFn: () =>
            fetch('data.json').then((res) =>
                res.json(),
            ),
    })
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        data.date = startDate.toLocaleDateString().replaceAll(`/`, "-");

        let newOrder = [...orderData]
        if (data) {

            newOrder.push(data)
        }
        setOrderData(newOrder)
        reset()
        onClose()
    }


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
                                                data?.product.map(items => (
                                                    <tr key={items.sku[0].id} className='border border-t-0 border-black dark:border-white'>{console.log()}
                                                        <td className='font-semibold text-center text-base py-2'>{items.sku[0].id}</td>
                                                        <td className='font-semibold text-center text-base py-2 flex items-center gap-2 justify-center'>{items.sku[0].customer_profile.profile_pic ? <img src={items.sku[0].customer_profile.profile_pic} alt="" /> : <RxAvatar className='text-xl text-indigo-600' />}{items.sku[0].customer_profile.name}</td>
                                                        <td className='font-semibold text-center text-base py-2'>₹{items.sku[0].selling_price}</td>
                                                        <td className='font-semibold text-center text-base py-2'>{items.updated_on.slice(0, 10)}</td>
                                                        <td className='font-semibold text-center py-2 text-xl'>
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
                                            {
                                                orderData?.map(items => (
                                                    <tr key={items} className='border border-t-0 border-black dark:border-white'>
                                                        <td className='font-semibold text-center text-base py-2'>{items.id}</td>
                                                        <td className='font-semibold text-center text-base py-2 flex items-center gap-2'>{items?.picture ? <img src={items.customer_profile.profile_pic} alt="" /> : <RxAvatar className='text-xl text-indigo-600' />} {items.name}</td>
                                                        <td className='font-semibold text-center text-base py-2'>{items.price}</td>
                                                        <td className='font-semibold text-center text-base py-2'>{items?.date}</td>
                                                        <td className='font-semibold text-center py-2 text-xl'>
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
                                                                </Popover></div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </TabPanel>
                                <TabPanel>
                                    <table className='w-full table-fixed'>
                                        <thead>
                                            <tr className='border border-black bg-slate-300 dark:bg-black dark:border-white'>
                                                <th className='py-2 text-lg'>ID</th>
                                                <th className='py-2 text-lg'>Quantity</th>
                                                <th className='py-2 text-lg'>Price ₹</th>
                                                <th className='py-2 text-lg'>Invoice Date</th>
                                                <th className='py-2 text-lg'>Invoice No</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data?.salesOrder.map(items => (
                                                    <tr key={items.customer_id} className='border border-t-0 border-black dark:border-white'>
                                                        <td className='font-semibold text-center text-base py-2'>{items.customer_id}</td>
                                                        <td className='font-semibold text-center text-base py-2 flex items-center gap-2 justify-center'>{items?.items[0].quantity}</td>
                                                        <td className='font-semibold text-center text-base py-2'>₹ {items?.items[0].price}</td>
                                                        <td className='font-semibold text-center text-base py-2'>{items?.invoice_date}</td>
                                                        <td className='font-semibold text-center text-base py-2'>{items?.invoice_no}</td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>

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
                        <ModalContent className="max-w-[600px] bg-slate-700 mx-auto p-4 text-white">
                            <ModalHeader className='font-bold text-lg'>Make a Sales Order</ModalHeader>
                            {/* <ModalCloseButton /> */}
                            <ModalBody>
                                <form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-8'>
                                    <div className='flex gap-3 items-center'>
                                        <div className='flex gap-1 flex-col flex-1 relative'>
                                            <label htmlFor="" className='font-semibold'>Id</label>
                                            <input type='number' {...register("id", { required: true })} placeholder='Enter Customer Id' className='p-1 bg-slate-300 border-0 outline-0 rounded text-black' />
                                            {errors.id && <p role="alert" className='text-red-400 absolute top-full'>Please Enter a vlid Id</p>}
                                        </div>
                                        <div className='flex gap-1 flex-col flex-1 relative'>
                                            <label htmlFor="" className='font-semibold'>Customer Name</label>
                                            <input type="text"{...register("name", { required: true })} placeholder='Enter Customer Name' className='bg-slate-300 border-0 outline-0 p-1 rounded text-black' />
                                            {errors.name && <p role="alert" className='text-red-400 absolute top-full'>Name Is required</p>}
                                        </div>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <div className='flex gap-1 flex-col flex-1 relative'>
                                            <label htmlFor="" className='font-semibold'>Price</label>
                                            <input type="number" {...register("price", { required: true })} placeholder='Enter Customer Name' className='bg-slate-300 border-0 outline-0 p-1 rounded text-black' />
                                            {errors.name && <p role="alert" className='text-red-400 absolute top-full'>Please Enter Price (Number)</p>}
                                        </div>
                                        <div className='flex gap-1 flex-col flex-1'>
                                            <label htmlFor="" className='font-semibold'>Date</label>
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='border-0 bg-slate-300 w-full outline-0 p-1 rounded text-black' />
                                            {errors.date && <p role='alert' className='text-red-400 absolute top-full'>Please select date</p>}
                                        </div>
                                    </div>
                                    <Button type='submit' className='bg-blue-500 text-white p-2 rounded hover:bg-blue-700'>Submit</Button>
                                </form>
                            </ModalBody>

                            <ModalFooter className='space-x-3 mt-5'>
                                <Button className='bg-blue-500 text-white p-2 rounded hover:bg-blue-700' onClick={onClose}>
                                    Close
                                </Button>

                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </div>
            </section>

            {/* for product listing */}
            <section className='dark:bg-slate-700 dark:text-white py-20'>
                <div className="container mx-auto">
                    <AllProduct data={data}></AllProduct>

                </div>
            </section>
        </main >
    )
}

export default Home