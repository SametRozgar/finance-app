import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
const Home = () => {

  const loggedin={fhirstName:"Samet"}

  return (
    <section className="home">
    <div className="home-content">
      <header className="home-header">
       <HeaderBox 
       type="Tebrikler" 
       title="Hoşgeldin" 
       user={loggedin?.fhirstName || "Misafir"} 
       subtext="Hesabına başarıyla giriş yapıldı"/>

       <TotalBalanceBox
       accounts={[]}
       totalBanks={1}
       totalCurrentBalance={1250.35}
       
       
       />
      </header>
    </div>
    </section>
     
    
  )
}

export default Home
