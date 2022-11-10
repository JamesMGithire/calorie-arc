function ContactUs() {
  // return(
  //     <div>
  //         <h1>Contact Page Here</h1>
  //     </div>
  // )
  let handleSubmit = async (e) => {
    e.preventDefault()
    e.currentTarget.reset()
    try {
      let res = await fetch('https://my-contact-api.herokuapp.com/contacts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id: state.id,
          fullname: state.fullname,
          email: state.email,
          message: state.message,
        }),
      })
      let resJson = await res.json()
      if (resJson.status === 200) {
        setState((state) => [resJson, ...state])
      } else {
        console.log('some error occured')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Do you have a question about our products? We’d love to hear from you.
          Here’s how you can reach us..
        </p>
      </div>

      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p> Ngong Lane, Ngong Lane Plaza, 1st Floor, Nairobi Kenya</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaVoicemail />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p> contact@caloriearc.com</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p> (+254) 58-5674-578</p>
            </div>
          </div>
        </div>

        <div className="contactForm">
          <form action="" onSubmit={handleSubmit}>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input
                type="text"
                name=""
                required="required"
                // value={state.fullname}
                onChange={onInputChange}
              />
              <label className="label" htmlFor="fullname">
                Full Name
              </label>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name=""
                required="required"
                // value={state.email}
                onChange={onInputChange}
              />
              <label className="label" htmlFor="email">
                Email
              </label>
            </div>

            <div className="inputBox">
              <textarea
                required="required"
                // value={state.message}
                onChange={onInputChange}
              ></textarea>
              <label className="label" htmlFor="message">
                Type your message
              </label>
            </div>

            <div className="inputBox">
              <input type="submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
