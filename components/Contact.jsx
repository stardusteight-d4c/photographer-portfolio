import Hero from '../components/Hero'

const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">
        Let&apos;s work together
      </h1>
      <form
        className="max-w-[600px] m-auto"
        action="https://getform.io/f/80055912-1739-4b78-a42a-0bc8046bb6e3"
        method="POST"
      >
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            name="name"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            name="email"
            type="email"
            placeholder="captur@email.com"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-4"
          name="subject"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full resize-none "
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
      </form>
    </div>
  )
}

export default Contact
