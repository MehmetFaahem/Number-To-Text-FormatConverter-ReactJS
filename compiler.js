import React, { useState } from 'react'

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

const tens = ['ten', 'eleventh', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'ninteen']

const teens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

function compileTrillion(num) {
    if (num == 0) {
        return 'Zero'
    } else if (num >= 1000000000000) {
        return (
            compileBillion(Math.floor(num / 1000000000000)) + ' Trillion ' + compileBillion(num % 1000000000000)
        )
    } else {
        return compileBillion(num)
    }

}

function compileBillion(num) {
    if (num >= 1000000000) {
        return (
            compileMillion(Math.floor(num / 1000000000)) + ' Billion ' + compileMillion(num % 1000000000)
        )
    } else {
        return compileMillion(num)
    }
}

function compileMillion(num) {
    if (num >= 1000000) {
        return (
            compileThousends(Math.floor(num / 1000000)) + ' Million ' + compileThousends(num % 1000000)
        )
    } else {
        return compileThousends(num)
    }
}

function compileThousends(num) {
    if (num >= 1000) {
        return (
            compileHundred(Math.floor(num / 1000)) + ' Thousend ' + compileHundred(num % 1000)
        )
    } else {
        return compileHundred(num)
    }
}

function compileHundred(num) {
    if (num > 99) {
        return (
            ones[Math.floor(num / 100)] + ' Hundred ' + compileTeen(num % 100)
        )
    } else {
        return compileTeen(num)
    }
}

function compileTeen(num) {
    if (num < 10) {
        // 1 To 9
        return ones[num]
    } else if (num >= 10 && num < 20) {
        // 10 To 19
        return tens[num - 10]
    } else {
        // 21 To 99
        return teens[Math.floor(num / 10)] + ' ' +
            ones[num % 10]
    }
}


function Compiler() {

    const [number, setNumber] = useState(0)

    return (
        <div style={{ paddingBottom: '100%' }} className='p-16 place-content-center place-items-center flex flex-col flex-1'>
            <h1 className='laptop:text-5xl mobile:text-lg text-white text-center p-10' >Input any number you know. I will convert it for you</h1>
            <input type='number' value={number} onChange={e => setNumber(e.target.value)} className='laptop:text-3xl mobile:text-xl mt-10 w-auto p-6 rounded-xl bg-white text-black' placeholder='input any number you know' />
            <h1 className='laptop:text-6xl select-all mobile:text-xl mt-36 leading-relaxed text-pink-300 text-center'>
                {compileTrillion(number)}
            </h1>
        </div>
    )
}

export default Compiler