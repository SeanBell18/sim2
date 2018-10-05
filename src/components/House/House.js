import React, { Component } from 'react'

export default function House(props) {
    return (
        <div>
            <h4>Houses</h4>
            {props.houses.map((house) => {
                return (
                    <div key={house.id}>
                        <div>Name: {house.name}</div>
                        <div>Address: {house.address}</div>
                        <div>City: {house.city}</div>
                        <div>State: {house.state}</div>
                        <div>Zipcode: {house.zip}</div>
                        <button onClick ={props.handleDelete(house.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}