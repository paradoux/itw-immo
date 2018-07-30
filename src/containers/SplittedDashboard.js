import React from 'react'

class SplittedDashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            buyers: [
                {
                    firstname: "Etienne",
                    lastname: "Vuibert",
                    type: ["T3", "T4"],
                    maxbudget: 800000
                },
                {
                    firstname: "Jean",
                    lastname: "Petit",
                    type: ["T3", "T4"],
                    maxbudget: 600000
                },
                {
                    firstname: "Marc",
                    lastname: "Mehauté",
                    type: ["T2"],
                    maxbudget: 150000
                }
            ],
            interesting: [],
            form: {
                type: '',
                price: ''
            },
            newgood: {}
        }
    }

    filterBuyers = () => {
        let { buyers, newgood } = this.state
        return buyers.filter((buyer) => {
            return (buyer.type.includes(newgood.type) && (newgood.price <= buyer.maxbudget))
        })
    }


    displayInterested = () => {
        var { newgood } = this.state
        if (newgood.type) {
            var interested = this.filterBuyers()
            return (
                <div>
                    <p>We found {interested.length} people potentially interested by your good !</p>
                </div>
            )
        }

        return (
            <div>
                <p>Fill the form to see who would be interested by your good !</p>
            </div>
        )
    }

    displayInteresting = () => {
        var { newgood, buyers } = this.state
        var buyer = buyers[2]
        if (buyer.type.includes(newgood.type) && (newgood.price <= buyer.maxbudget)) {
            return (
                <div>
                    <p>Hello {buyer.firstname} !</p>
                    <p>We just found a good that could fit your needs !</p>
                    <p>It is a {newgood.type} and the seller wants {newgood.price} euros for it !</p>
                    <p>Do you want to see more about that ? </p>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p>Hello {buyer.firstname} !</p>
                    <p>There are no updates for the moment, but we continue our research !</p>
                    <p>We remind you that you are looking for a {buyer.type} with a maximum budget of {buyer.maxbudget} euros</p>
                </div>
            )
        }
    }

    onTypeChange = (e) => {
        let type = e.target.value
        this.setState({ ...this.state, form: { ...this.state.form, type } })
    }

    onPriceChange = (e) => {
        let price = e.target.value
        this.setState({ ...this.state, form: { ...this.state.form, price } })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        let { type, price } = this.state.form
        price = parseInt(price, 10)
        let newgood = { type, price }
        this.setState({ ...this.state, newgood })
    }

    render() {
        return (
            <div>
                <p>Hello ! Welcome to Proprioo ! </p>
                <br />
                <div className="seller-dashboard">
                    <form action="" onSubmit={this.handleSubmit}>
                        <label htmlFor="">
                            <input type="text" value={this.state.form.type} onChange={this.onTypeChange} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Type du bien: T2, T3, T4..."} placeholder="Type du bien: T2, T3, T4..." />
                        </label>
                        <label htmlFor="">
                            <input type="text" value={this.state.form.price} onChange={this.onPriceChange} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Prix du bien"} placeholder="Prix du bien" />
                        </label>
                        <input type="submit" />
                    </form>
                    {this.displayInterested()}
                </div>
                <div className="buyer-dashboard">
                    {this.displayInteresting()}
                </div>


            </div>
        )
    }

}


export default SplittedDashboard