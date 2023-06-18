import React from 'react'
import Navbar from '../Components/Navbar'
import { FaTrash } from 'react-icons/fa'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'
const MyList = () => {
    return (
        <div>
            <Navbar />
            <ul>
                <li className='flex w-4/4 justify-around items-center p-2 rounded ml-4 mr-10 mt-6 bg-red-600'>
                    <Card
                        className='p-3 flex gap-14 w-auto'
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Image
                            className='w-96 h-28'
                            objectFit='cover'
                            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                            alt='Caffe Latte'
                        />
                        <Stack >
                            <CardBody>
                                <Heading size='md'>The perfect latte</Heading>

                                <Text py='2'>
                                    Caffè latte is a coffee beverage of Italian origin made with espresso
                                    and steamed milk.
                                </Text>
                            </CardBody>
                            <CardFooter>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy Latte
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                    <FaTrash size={30} />
                </li>
            </ul>
        </div>
    )
}

export default MyList