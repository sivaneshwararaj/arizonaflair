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
  <div  className='centeralign flexbox'>
  <div><img src='./gif.gif' alt='no image found' className='imgsize'></img></div>
  <div className='colorcontainer'>
    <div><h2 className='bottomspace'><span className='text-center text-[30px] font-bold ff1 underline '>KEY FEATURES </span></h2></div>
    <div>
      <ul>
  <li className='spacing'><span className='font-bold '>Eye-catching Advertising:</span><p> Grab attention with our 8ft waving tube man.</p></li>
  <li className='spacing'><span className='font-bold '>Versatile Usage:</span><p> Perfect for parties, events, and promoting businesses.</p></li>
  <li className='spacing'><span className='font-bold '>Increased Visibility:</span> <p>Attracts customers and creates curiosity.</p></li>
  <li className='spacing'><span className='font-bold '>Fun and Exciting:</span> <p>Adds joy and entertainment to any occasion.</p></li>
  <li className='spacing'><span className='font-bold '>Durable Construction:</span> <p>Made from rip-resistant nylon with UV protection.</p></li>
  <li className='spacing'><span className='font-bold '>Easy to Set Up:</span> <p>Hassle-free inflation and secure installation.</p></li>
  <li className='spacing'><span className='font-bold '>Customizable Options:</span><p> Add your logo and personalized elements.</p></li>
  <li className='spacing'><span className='font-bold '>Cost-effective Advertising:</span> <p>High impact at a budget-friendly price.</p></li>
</ul>
</div>
  </div>
  </div>
 
  <div className='centercontainer'>
  <h1>Rent Now</h1>
 
<div className='formalign'>

<form 
            action="https://submit-form.com/X6cAMD7Xl"
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
            <label  style={{ marginBottom: "8px" }}>
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
            <label  style={{ marginBottom: "8px" }}>
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
            <label  style={{ marginBottom: "8px" }}>
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

            <label  style={{ marginBottom: "8px" }}>
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
            <label  style={{ marginBottom: "8px" }}>
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
            <label style={{ marginBottom: "8px" }}>
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
</div>
</main>
  )
}
