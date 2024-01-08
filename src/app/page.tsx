import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  
  // Function to get the current date in "YYYY-MM-DD" format
  const getCurrentDate = () => {
      const today = new Date()
      const year = today.getFullYear()
      const month = String(today.getMonth() + 1).padStart(2, "0")
      const day = String(today.getDate()).padStart(2, "0")
      return `${year}-${month}-${day}`
  }

  // Function to get the date two days from today in "YYYY-MM-DD" format
  const getTwoDaysAfterDate = () => {
      const today = new Date()
      today.setDate(today.getDate() + 2)
      const year = today.getFullYear()
      const month = String(today.getMonth() + 1).padStart(2, "0")
      const day = String(today.getDate()).padStart(2, "0")
      return `${year}-${month}-${day}`
  }
  return (
<main>
  <div className='nav'><h1 className='text'>Arizona Flair</h1></div>
  <div className='text1'><h1>Rent a waving tube man</h1></div>
  <div  className='centeralign'>
  <div><img src='./gif.gif' alt='no image found'></img></div>
  <div>
    <div></div>
    <div>
      <ul>
  <li>Eye-catching Advertising: Grab attention with our 8ft waving tube man.</li>
  <li>Versatile Usage: Perfect for parties, events, and promoting businesses.</li>
  <li>Increased Visibility: Attracts customers and creates curiosity.</li>
  <li>Fun and Exciting: Adds joy and entertainment to any occasion.</li>
  <li>Durable Construction: Made from rip-resistant nylon with UV protection.</li>
  <li>Easy to Set Up: Hassle-free inflation and secure installation.</li>
  <li>Customizable Options: Add your logo and personalized elements.</li>
  <li>Cost-effective Advertising: High impact at a budget-friendly price.</li>
</ul>
</div>
  </div>
  </div>
<div>
<form
            action="https://submit-form.com/n0wxzeNIO"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                fontFamily: "Inter, sans-serif",
                fontSize: "18px",
                color: "black",
                padding: "24px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.0)",
            }}
        >
            <input
                type="hidden"
                name="_redirect"
                // here you have to paste link, where do you want to lead your users to
                value="https://massive-months-717280.framer.app/conformation"
            />
            <label for="name" style={{ marginBottom: "8px" }}>
                Name:
            </label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                style={{
                    width: "100%",
                    padding: "16px",
                    marginBottom: "24px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                }}
            />
            <label for="email" style={{ marginBottom: "8px" }}>
                Email:
            </label>
            <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
                style={{
                    width: "100%",
                    padding: "16px",
                    marginBottom: "24px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                }}
            />
            <label for="phonenumber" style={{ marginBottom: "8px" }}>
                Phone Number:
            </label>
            <input
                type="text"
                id="number"
                name="number"
                placeholder="Number"
                required
                style={{
                    width: "100%",
                    padding: "16px",
                    marginBottom: "24px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                }}
            />

            <label for="fromDate" style={{ marginBottom: "8px" }}>
                From Date:
            </label>
            <input
                type="date"
                id="fromDate"
                name="fromDate"
                defaultValue={getCurrentDate()}
                required
                style={{
                    width: "100%",
                    padding: "16px",
                    marginBottom: "24px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                }}
            />
            <label for="toDate" style={{ marginBottom: "8px" }}>
                Till Date:
            </label>
            <input
                type="date"
                id="toDate"
                name="toDate"
                defaultValue={getTwoDaysAfterDate()}
                required
                style={{
                    width: "100%",
                    padding: "16px",
                    marginBottom: "24px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                }}
            />
            <label for="notes" style={{ marginBottom: "8px" }}>
                notes:
            </label>
            <textarea
                type="textarea"
                rows="4"
                id="notes"
                name="notes"
                placeholder="Leave important notes"
                required
                style={{
                    width: "100%",
                    padding: "16px",
                    marginBottom: "24px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                }}
            />
            <label style={{ marginBottom: "24px" }}>
                <input
                    type="checkbox"
                    required
                    disabled
                    checked
                    style={{ marginRight: "8px" }}
                />
                contact me to verifiy the booking
            </label>
            <input
                type="submit"
                value="Submit"
                style={{
                    fontSize: "16px",
                    fontFamily: "Manrope, sans serif",
                    width: "100%",
                    padding: "16px",
                    backgroundColor: "#FFBF00",
                    color: "black",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            />
        </form>
</div>
</main>
  )
}
