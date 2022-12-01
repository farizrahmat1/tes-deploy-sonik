import './customer.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import CustomerTable from '../../components/customer data table/CustomerTable'

const Customer = () => {
  return (
    <div className="customer">
    <Sidebar/>
    <div className="customerContainer">
      <Navbar/>
      <div className='customertable'>
        <h3>Data Customer</h3>
        <CustomerTable/>
      </div>
    </div>
  </div>
  )
}

export default Customer;