import './transaction.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import TransactionTable from '../../components/transaction table/TransactionTable'

const Transaction = () => {
  return (
    <div className="transaction">
    <Sidebar/>
    <div className="transactionContainer">
      <Navbar/>
        <h3>Transaction Data</h3>
        <div className='transactiontable'>
        <TransactionTable/>
      </div>
    </div>
  </div>
  )
}

export default Transaction