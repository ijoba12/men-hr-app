import React from 'react'
import Table from "react-bootstrap/Table";
import tosin from "../../assets/Ellipse 7.svg";
import { PayrollTable,payRollgraph } from '../../taskboard';
import { Link } from 'react-router-dom';
import PayrollModal from './PayRollModal';

const PayRoll = () => {
  return (
    <>
    <main className="summary-container">
      <section>
      <div className="pt-4 ">
          <div className="">
            <h1 className="taskboard-h1">Payroll</h1>
            <div className="d-flex justify-content-between ">
              <h3 className="taskboard-h3 mb-4">Dashboard/Payroll</h3>
              <PayrollModal/>
            </div>
          </div>
          <div className="d-lg-flex gap-2 justify-content-between align-items-center  payroll-summary mb-3" responsive>
            {payRollgraph.map((payRollgraph) => {
              const { id, name, number, graph, time } = payRollgraph;
              return (
                <div
                  key={id}
                  className="container  payroll-summary-div-1 "
                >
                  <div className=" summary-payroll-1">
                    <h6 className="summary-payroll-name">{name}</h6>
                    <h2 className="summary-payroll-number text-bold">{number}</h2>
                    <p>{time}</p>
                  </div>
                  <div className="">
                    <img src={graph} alt="" className="summary-payroll-img" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section>
      <div className='Table border rounded-2 p-2'>
        <h2>Table</h2>
          <Table responsive="lg">
      <thead className='text-white'>
        <tr>
          <th className='bg-light'>Employee</th>
          <th className='bg-light'>Salary</th>
          <th className='bg-light'>Allowance</th>
          <th className='bg-light'>Deduction</th>
          <th className='bg-light'>Tax</th>
          <th className='bg-light'>Net Salary </th>
        </tr>
      </thead>
      <tbody>
        {PayrollTable.map((Pay)=>{
          const {id,name,salary,allowance,deductions,task,NetSalary}=Pay
           return (
          <tr key={id}>
          <td><p className='word-input d-flex'><img src={tosin} alt="" /><p className='ms-2 mt-3'>{name} </p></p> </td>
          <td><p className='word-input text-bold mt-3'> {salary} </p></td>
          <td><p className='word-input mt-3'>{allowance}</p></td>
          <td><p className='word-input mt-3'>{deductions}</p> </td>
          <td><p className='word-input mt-3'>{task}</p> </td>
          <td><p className='word-input mt-3'>{NetSalary}</p> </td>
        </tr>
           )
        })}
        
      </tbody>
    </Table>
          </div>
      </section>
    </main>
    </>
  )
}

export default PayRoll