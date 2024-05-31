import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { LogoutAction } from "../reducers/AuthReducer";
import { IsAdmin } from "../services/AuthService";

const statusStyles = {
  accepted: { color: 'green', fontWeight: 'bold' },
  pending: { color: 'orange', fontWeight: 'bold' },
  rejected: { color: 'red', fontWeight: 'bold' }
};

function OrderCard({order,updateStatus}) {

    function changeHandler(event)
    {
        event.preventDefault()
        const id=event.target.id;
        const status=event.target.value;
        updateStatus({id,status})
    }


  return (
    <div  className="col-md-6 mb-4">
     <div className="card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
              <div className="card-header" style={{ backgroundColor: '#f8f9fa' }}>
                <h5 className="card-title" style={{ fontSize: '1.25rem' }}>Order ID: {order._id}</h5>
                <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: '0.875rem' }}>Date: {order.date}</h6>
              </div>
              <div className="card-body" style={{ backgroundColor: '#ffffff' }}>
                <p className="card-text"><strong>Customer:</strong> {order.username}</p>
                <p className="card-text"><strong>Address:</strong> {order.address}</p>
                <ul className="list-group mb-3">
                  {order.items.map((item, idx) => (
                    <li key={idx} className="list-group-item d-flex justify-content-between align-items-center" style={{ fontSize: '0.875rem' }}>
                      {item.name} - {item.count} x ${item.price.toFixed(2)}
                      <span className="badge bg-primary rounded-pill">${(item.count * item.price).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <p className="card-text"><strong>Total Amount:</strong> ${order.totalBillAmount.toFixed(2)}</p>
                <p className="card-text" style={statusStyles[order.Status.toLowerCase()]}><strong>Status:</strong> {order.Status} 
                 { IsAdmin()&&<div className="mb-3">
                  <select
                    className="form-select"
                    value={order.action}
                    onChange={changeHandler}
                    style={{ width: '200px' }}
                    id={order._id }
                  >
                    <option value="">Select Action</option>
                    <option value="Accepted">Accept</option>
                    <option value="Rejected">Reject</option>
                  </select>
                </div>}
                </p>
              </div>
            </div>
            </div>
  )
}

export default OrderCard