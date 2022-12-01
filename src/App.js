import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Report from "./pages/report/Report";
import CsMenu from "./pages/chargingstation/CsMenu";
import Activity from "./pages/activity/Activity";
import Customer from "./pages/customer/Customer";
import Transaction from "./pages/transaction/Transaction";
import AddCs from "./pages/add/AddCs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateCs from "./pages/update/UpdateCs";
import AddCustomer from "./pages/add/AddCustomer";
import UpdateCustomer from "./pages/update/UpdateCustomer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="chargingstation" element={<CsMenu />} />
            <Route path="addcs" element={<AddCs />} />
            <Route path="update/:id" element={<UpdateCs />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="activity" element={<Activity />} />
            <Route path="report" element={<Report />} />
            <Route path="customer" element={<Customer />} />
              <Route path="addcustomer" element={<AddCustomer />} />
              <Route path="updatecustomer/:id" element={<UpdateCustomer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
