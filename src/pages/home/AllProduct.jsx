/* eslint-disable react/prop-types */
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React, { } from 'react'
import { MultiSelect, useMultiSelect } from 'chakra-multiselect'

const AllProduct = ({ data }) => {
    // const [selectedData, setselectedData] = useState([])
    const productData = data?.product?.map(items => items?.name)

    const { value, options, onChange } = useMultiSelect({
        value: [],
        options: [...productData]
    })


    const selectedData = data?.product.filter(items => items.name == value?.map(sel => sel.value))

    // value.forEach(items => {
    //     data?.product.filter(pitems => pitems.name === items.vlaue)
    // })

    return (
        <div className='shadow max-w-[900px] p-5 rounded-md mx-auto'>
            <h2 className='text-center text-2xl font-bold mb-4'>AllProduct</h2>

            <div className='px-3'>
                <MultiSelect className='text-black'
                    options={options}
                    value={value}
                    label='Choose or create items'
                    onChange={onChange}
                    create
                />
                <Accordion>
                    {
                        !selectedData?.length ?
                            data?.product.map((items, idx) => (
                                <AccordionItem key={idx} className='p-2'>
                                    <h2 className='py-2 font-semibold text-lg px-2 border-b'>
                                        Nicher ta
                                        <AccordionButton>
                                            <div className='flex items-center justify-between w-full'>
                                                <Box as='span' flex='1' textAlign='left'>
                                                    {items?.name}
                                                </Box>
                                                <h3 className='font-bold'>Rate: ₹ {items.sku[1].selling_price}</h3>
                                            </div>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} className='p-2'>
                                        <div className='py-5 flex gap-5'>
                                            <div className='flex flex-col gap-3 flex-1'>
                                                <label htmlFor="" className='block font-semibold'>Enter Selling Rate</label>
                                                <input type="text" placeholder='Enter Selling Rate' className='border rounded border-slate-500 outline-none px-2' />
                                            </div>
                                            <div className='flex flex-col gap-3 flex-1'>
                                                <label htmlFor="" className='block font-semibold'>Enter Selling Rate</label>
                                                <input type="text" placeholder='Enter Selling Rate' className='border rounded border-slate-500 outline-none px-2' />
                                            </div>
                                        </div>
                                        <div className='text-end'>
                                            <span className='p-2 bg-green-700 bg-opacity-40 rounded-full font-semibold'>{items?.sku[1].quantity_in_inventory > 0 ? items?.sku[1].quantity_in_inventory : "No"} Item(s) Remaining</span>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                            ))



                            :
                            selectedData?.map((items, idx) => (
                                <AccordionItem key={idx} className='p-2'>
                                    <h2 className='py-2 font-semibold text-lg px-2 border-b'>
                                        <AccordionButton>
                                            <div className='flex items-center justify-between w-full'>
                                                <Box as='span' flex='1' textAlign='left'>
                                                    {items?.name}
                                                </Box>
                                                <h3 className='font-bold'>Rate: ₹ {items.sku[1].selling_price}</h3>
                                            </div>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} className='p-2'>
                                        <div className='py-5 flex gap-5'>
                                            <div className='flex flex-col gap-3 flex-1'>
                                                <label htmlFor="" className='block font-semibold'>Enter Selling Rate</label>
                                                <input type="text" placeholder='Enter Selling Rate' className='border rounded border-slate-500 outline-none px-2' />
                                            </div>
                                            <div className='flex flex-col gap-3 flex-1'>
                                                <label htmlFor="" className='block font-semibold'>Enter Selling Rate</label>
                                                <input type="text" placeholder='Enter Selling Rate' className='border rounded border-slate-500 outline-none px-2' />
                                            </div>
                                        </div>
                                        <div className='text-end'>
                                            <span className='p-2 bg-green-700 bg-opacity-40 rounded-full font-semibold'>{items?.sku[1].quantity_in_inventory > 0 ? items?.sku[1].quantity_in_inventory : "No"} Item(s) Remaining</span>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                            ))
                    }
                </Accordion>
            </div>
        </div>
    )
}

export default AllProduct