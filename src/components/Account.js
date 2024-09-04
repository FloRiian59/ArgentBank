import '../css/Account.css'

function Account() {
    const CardData = [
        {
            "id": "1",
            "title": "Argent Bank Checking (x8349)",
            "amount": "$2,082.79",
            "description": "Available Balance"
        },
        {
            "id": "2",
            "title": "Argent Bank Savings (x6712)",
            "amount": "$10,928.42",
            "description": "Available Balance"
        },
        {
            "id": "3",
            "title": "Argent Bank Credit Card (x8349)",
            "amount": "$184.30",
            "description": "Current Balance"
        }
    ]
    return (
        <>
            <h2 className="sr-only">Accounts</h2>
            {CardData.map(card => (
                <section key={card.id} className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">{card.title}</h3>
                        <p className="account-amount">{card.amount}</p>
                        <p className="account-amount-description">{card.description}</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            ))}
        </>
    )
}

export default Account