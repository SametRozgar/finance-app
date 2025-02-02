
import React from 'react'
import CountUp from 'react-countup'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'
const TotalBalanceBox = (
    {
        accounts=[],totalBanks,totalCurrentBalance
    }:TotlaBalanceBoxProps
) => {
  return (
    <section className="total-balance">
        <div className="total-balance-chart">
            <DoughnutChart accounts={[]}/>
        </div>
        <div className="flex flex-col gap-6">
            <h2 className="header-2">
            Banka Hesabı: {totalBanks}
            </h2>
            <div className="flex flex-col gap-2 flex-center">
                <p className='total-balance-label'>
                    Total Bakiye: 
                </p>
                <div className="total-balance-amount flex-center gap-2">
                    <AnimatedCounter amount={totalCurrentBalance}/>
                
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox
