const { Link } = ReactRouterDOM

export function ContactPreview({ contact }) {
  return (
    <article>
      <h4>{contact.firstName + contact.lastName}</h4>
      <h1>🤼</h1>
      <p>
        Email: <span>${contact.email}</span>
      </p>
      <p>
        Phone: <span>{contact.phone}</span>
      </p>
      <hr />
      <Link to={`/contact/${contact._id}`}>Details</Link>
    </article>
  )
}
