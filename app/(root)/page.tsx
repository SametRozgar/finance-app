import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
const Home = async () => {

  const loggedin= await getLoggedInUser();
  return (
    <section className="home">
    <div className="home-content">
      <header className="home-header">
       <HeaderBox 
       type="Tebrikler" 
       title="Hoşgeldin" 
       user={loggedin?.name || "Misafir"} 
       subtext="Hesabına başarıyla giriş yapıldı"/>

       <TotalBalanceBox
       accounts={[]}
       totalBanks={1}
       totalCurrentBalance={1250.35}
       
       
       />
      </header>
    </div>
    <RightSidebar 
    user={loggedin}
    transactions={[]}
    banks={[{currentBalance:123.50},{currentBalance:500.50}]}
    />

    </section>
     
    
  )
}

export default Home
