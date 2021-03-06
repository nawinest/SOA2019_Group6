import React, { Component } from 'react';
import ApiListItem from '../component/ApiDoc/ApiListItem'
class ApiDoc extends Component {
    state = {
        list: [{
            path: '/api/mechanics/find',
            service: 'Mechanic',
            desc: 'get information of all mechanics.'
        },{
            path: '/api/mechanics/find/:id',
            service: 'Mechanic',
            desc: 'get information of mechanic by ID.'
        },{
            path: '/api/mechanics/search',
            service: 'Mechanic',
            desc: 'get information of mechanic by input data'
        },{
            path: '/api/mechanics/register',
            service: 'Mechanic',
            desc: 'post register new mechanic by request body.'
        },{
            path: '/api/customers/:id',
            service: 'Customer',
            desc: 'Get information of customer by ID.'
        },{
            path: '/api/customers/register',
            service: 'Customer',
            desc: 'Post request body to save in database.'
        },{
            path: '/api/auth/customer',
            service: 'Authentication',
            desc: 'Authentication customer in auth service by username and password.'
        },{
            path: '/api/auth/mechanic',
            service: 'Authentication',
            desc: 'Authentication mechanic in auth service by username and password.'
        }]
    }
    render() {
        const data = this.state.list.map((item) =>
            <ApiListItem data={item} />
        )
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="">
                        <h1>Api Gateway</h1>
                        <p>Group 6 : Payangonline.me</p>
                    </div>
                </div>
                <div style={{width:'100%', textAlign:'center', marginBottom:'1em'}}><h3>List of Api end-point</h3></div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">End point</th>
                            <th scope="col">Service</th>
                            <th scope="col">Decription</th>
                        </tr>
                    </thead>
                    <tbody>{data}</tbody>
                    
                </table>
                
            </div>
                );
            }
        }
        
export default ApiDoc;