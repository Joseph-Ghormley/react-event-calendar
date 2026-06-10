import Event from './Event'

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>

        <tbody>
            <tr>
                <td className="time">8 am</td>
                <Event event='Morning Review 📚' color='green' location='Desk Setup' />
                <td></td>
                <td></td>
                <Event event='Code Practice 💻' color='blue' location='VS Code' />
                <td></td>
                <Event event='Coffee Break ☕' color='pink' location='Kitchen' />
                <td></td>
            </tr>

            <tr>
                <td className="time">9 am</td>
                <td></td>
                <Event event='React Lab ⚛️' color='blue' location='CodePath Lab' />
                <td></td>
                <td></td>
                <Event event='Study Hall 📝' color='green' location='Online Study Room' />
                <td></td>
                <Event event='Weekly Planning 📅' color='pink' location='Calendar App' />
            </tr>

            <tr>
                <td className="time">10 am</td>
                <td></td>
                <td></td>
                <Event event='GitHub Updates 🐙' color='blue' location='GitHub Repo' />
                <td></td>
                <td></td>
                <Event event='Project Work 🚀' color='green' location='VS Code' />
                <td></td>
            </tr>

            <tr>
                <td className="time">11 am</td>
                <Event event='Minecraft Build 🎮' color='pink' location='Creative World' />
                <td></td>
                <td></td>
                <Event event='Debugging Time 🛠️' color='blue' location='Dev Tools' />
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">12 pm</td>
                <td></td>
                <Event event='Lunch Break 🍔' color='green' location='Kitchen' />
                <td></td>
                <td></td>
                <Event event='Lunch Break 🍕' color='green' location='Kitchen' />
                <td></td>
                <Event event='Gaming Break 🕹️' color='pink' location='Game Room' />
            </tr>

            <tr>
                <td className="time">1 pm</td>
                <td></td>
                <td></td>
                <Event event='Networking Review 🌐' color='blue' location='Study Desk' />
                <td></td>
                <td></td>
                <Event event='React Props Practice ⚛️' color='green' location='CodePath Lab' />
                <td></td>
            </tr>

            <tr>
                <td className="time">2 pm</td>
                <Event event='Algorithm Practice 🧠' color='blue' location='Practice Site' />
                <td></td>
                <td></td>
                <Event event='Community Event 🤝' color='pink' location='Online Meetup' />
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">3 pm</td>
                <td></td>
                <Event event='Web Dev Practice 🌐' color='green' location='VS Code' />
                <td></td>
                <td></td>
                <Event event='README Update 📄' color='blue' location='GitHub Repo' />
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">4 pm</td>
                <td></td>
                <td></td>
                <Event event='Code Review 🔍' color='pink' location='VS Code' />
                <td></td>
                <td></td>
                <Event event='Push to GitHub ✅' color='blue' location='Terminal' />
                <td></td>
            </tr>

            <tr>
                <td className="time">5 pm</td>
                <Event event='Relax Time 😌' color='green' location='Home' />
                <td></td>
                <td></td>
                <td></td>
                <Event event='Game Night 🎲' color='pink' location='Discord' />
                <td></td>
                <Event event='Weekly Wrap-Up 🌟' color='blue' location='Calendar App' />
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar