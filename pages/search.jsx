import {useState} from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'

const Search = () => {

    const [pickup, setPickup] = useState("")
    const [dropoff, setDropoff] = useState("")

    const isInvalid = pickup === "" | dropoff === ""

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/" passHref={true}>
                    <BackButton src="/back.png" alt="back"/>
                </Link>
            </ButtonContainer>
            <InputContainer>
                <FromToIcons>
                    <Circle src="/filled-circle.png" alt="circle"/>
                    <Line src="/vertical-line.png" alt="line"/>
                    <Square src="/square-full.png" alt="square"/>
                </FromToIcons>
                <InputBoxes>
                    <Input 
                    placeholder="Enter pickup location"
                    value={pickup}
                    onChange={(e)=> setPickup(e.target.value.toLowerCase())}
                    />
                    <Input 
                    placeholder="Where to?"
                    value={dropoff}
                    onChange={(e)=> setDropoff(e.target.value.toLowerCase())}
                    />
                </InputBoxes>
                <PlusIcon src="/plus-math.png" alt="add"/>
            </InputContainer>
            <SavedPlaces>
                <StarIcon src="/star.png" alt="star"/>
                Saved Places
            </SavedPlaces>
            <Link href={{
                pathname: "/confirm",
                query: {
                    pickup: pickup,
                    dropoff: dropoff
                }
            }} passHref={true}>
                <Deck>
                    <ConfirmButton disabled={isInvalid}>
                        Confirm Locations
                    </ConfirmButton>
                </Deck>
            </Link>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
    bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
    bg-white px-4
`

export const BackButton = tw.img`
    h-12 cursor-pointer
`

const InputContainer = tw.div`
    bg-white flex items-center px-4 mb-2
`

const FromToIcons = tw.div`
    w-10 flex flex-col mr-2 items-center
`

const Circle = tw.img`
    h-2.5
`

const Line = tw.img`
    h-10
`

const Square = tw.img`
    h-3
`

const InputBoxes = tw.div`
    flex flex-col flex-1
`

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded p-2 outline-none border-none
    
`

const PlusIcon = tw.img`
    w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces = tw.div`
    flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img`
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const Deck = tw.div`
    flex justify-center
`

const ConfirmButton = tw.button`
    bg-black text-white text-center mt-2 mx-3 px-4 py-3 text-2xl cursor-pointer w-full disabled:opacity-50
`